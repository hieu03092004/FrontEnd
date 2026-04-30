import { TextField, Button, Typography } from "@mui/material";
import { AlertBox } from '../../components/Alert/AlertBox';
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { dbFirebase } from "../../firebaseConfig";
import { ref, update } from "firebase/database";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox,InputLabel,Select ,MenuItem  } from '@mui/material';
const hobbyList = [
    {
        label: "Đá bóng",
        value: "soccer"
    },
    {
        label: "Bơi lội",
        value: "swimming"
    },
    {
        label: "Bóng rổ",
        value: "basketball"
    },

]
export const ProfilePage = () => {
    const [fullNameError, setfullNameError] = useState(false);
    const [alert, setAlert] = useState(null);
    const user = useAuth();
    // console.log("User", user);
    const handleSubmit = (event) => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const gender = event.target.gender.value;
        const location=event.target.location.value;
        const hobbies = [];
        event.target.hobbies.forEach((input) => {
            if (input.checked) {
                hobbies.push(input.value);

            }
        })
        // console.log(gender);
        // console.log(hobbies);
        if (!fullName) {
            setfullNameError(true);
        }
        else {
            // console.log(fullName);
            update(ref(dbFirebase, "users/" + user.uid), {
                fullName: fullName,
                gender: gender,
                hobbies: hobbies,
                location:location
            }).then(() => {
                setAlert({
                    type: "success",
                    content: "Cập nhật thành công",
                    time: 3000,
                })
            })
        }



    }

    return (
        <>
            {/* <h1>Trang thông tin cá nhân</h1> */}
            <Typography variant="h5" style={{marginTop:"30px"}}>
                Thông tin cá nhân
            </Typography>
            <form onSubmit={handleSubmit} style={{ width: "500px" }}>
                {user !== undefined && (
                    <>
                        {user ? (
                            <>

                                <AlertBox alert={alert} setAlert={setAlert} />
                                <TextField id="fullName" label="Họ tên" variant="outlined" color="info" type="text" fullWidth name="fullName" margin="normal" error={fullNameError}
                                    onChange={(event) => event.target.value === "" ? setfullNameError(true) : setfullNameError(false)} defaultValue={user.infoUser.fullName} />
                                <FormControl>
                                    <FormLabel id="gender-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="gender-label"
                                        defaultValue={
                                            user.infoUser.gender ? user.infoUser.gender : "female"
                                        }
                                        name="gender"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                                        <FormControlLabel value="male" control={<Radio />} label="Nam" />
                                        <FormControlLabel value="other" control={<Radio />} label="Khác" />
                                    </RadioGroup>
                                </FormControl>
                                <FormGroup >
                                    <FormLabel>Sở thích của bạn</FormLabel>
                                    {hobbyList.map((item, index) => {
                                        return (
                                            <FormControlLabel key={index} control={<Checkbox defaultChecked={user.infoUser.hobbies?.includes(item.value) ? true : false} />} label={item.label} value={item.value} name="hobbies" />
                                        )

                                    })}

                                </FormGroup>
                                <FormControl fullWidth margin="normal">
                                    <InputLabel id="location-label">Vị trí</InputLabel>
                                    <Select
                                        labelId="ocation-label"
                                        defaultValue={user.infoUser.location || "Asia"}
                                        label="Vị trí"
                                        name="location"
                                    >
                                        <MenuItem value="Asia">Châu Á</MenuItem>
                                        <MenuItem value="Europe">Châu Âu</MenuItem>
                                        <MenuItem value="Americas">Chây Mỹ</MenuItem>
                                         <MenuItem value="Africa">Châu Phi</MenuItem>
                                    </Select>
                                </FormControl>
                                <div>
                                    <Button variant="contained" color="info" size="medium" fullWidth type="submit">Cập nhật</Button>
                                </div>


                            </>) : (<></>)}

                    </>

                )}



            </form>

        </>
    )
}