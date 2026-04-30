import { useState,useEffect } from "react";
import { authFirebase, dbFirebase } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue } from "firebase/database";
import { ref } from "firebase/database";
export const useAuth=()=>{
    const [user, setUser] = useState();
    
        useEffect(() => {
            onAuthStateChanged(authFirebase, (user) => {
                // console.log(user);
                if (user) {
                    onValue(ref(dbFirebase,"users/"+user.uid),(data)=>{
                        // console.log(data.val());
                        user.infoUser=data.val();
                        setUser(user);   
                    })
                   
                }
                else {
                    setUser(null);
                }
            })
        }, []);
        return user;
}