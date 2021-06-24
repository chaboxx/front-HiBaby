
import { fetchconToken, fetchsinToken } from "../helpers/fetch";
import { types } from "../types/types";

import Swal from 'sweetalert2'

export const startLogin=(email,password) =>{
    return async(dispatch) =>{

        
        const resp=await fetchsinToken("auth",{email,password},"POST");
        
        const body=await resp.json();
        
        //console.log(email,password);
        
        if (body.ok){
            localStorage.setItem("token",body.token);
            localStorage.setItem("token-init-date", new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name:body.name
            }))

        }else{
            Swal.fire("Error",body.msg,"error");
        }
    }


}


export const startRegister = (email,password,name) =>{
    return async (dispatch)=>{

        const resp=await fetchsinToken("auth/new",{email,password,name},"POST");

        const body = await resp.json();

        if (body.ok){
            localStorage.setItem("token",body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({
                uid:body.uid,
                name:body.name,
                
            }))
        }else{
            Swal.fire("Error",body.msg,"error");
        }

    }
}


//---------------RENOVAR TOKEN-------------
export const startChecking= () =>{

    return async (dispatch) =>{
        const resp=await fetchconToken("auth/renew");

        const body = await resp.json();

        console.log(body);


        if (body.ok){
            localStorage.setItem("token",body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({
                uid:body.uid,
                name:body.name,
                
            }))
        }else{
            
            dispatch(checkingFinish());
        }


    }

}






const checkingFinish=() =>({

    type: types.authCheckingFinish

});

export const startLogout = () =>{

    return ( dispatch )=>{
        localStorage.clear();
        dispatch(logout());
    }
}







const login= (user) =>({
    type: types.authLogin,
    payload:user
});



const logout= () =>({type:types.authLogout})