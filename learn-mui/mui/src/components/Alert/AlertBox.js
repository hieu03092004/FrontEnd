import { Alert } from "@mui/material"
export const AlertBox = (props) => {
    const { alert, setAlert } = props;
    if(alert){
        setTimeout(() => {
            setAlert(null);
        }, alert.time || 3000);
    }
    
    return (
        <>
            {alert && (
                <Alert variant='standard' color={alert.type} icon={<></>} style={{ position: "fixed", top: "10px", right: "10px" }}>{alert.content}</Alert>
            )}
        </>
    )
}