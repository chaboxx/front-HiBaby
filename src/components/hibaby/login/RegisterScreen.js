
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startLogout, startRegister } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import Swal from 'sweetalert2'
import { Link, Redirect, useHistory } from 'react-router-dom';

export const RegisterScreen = () => {

    

    //HISTORY USE HISTORY
    const history = useHistory();
    
    
   
    const dispach = useDispatch();


    const [formLoginValues,handleLoginInputChange]=useForm({
        lEmail:"pruebaRodrigo@gmail.com",
        lPassword:"123456"
    });

    const [formRegisterValues,handleRegisterInputChange]=useForm({
        rName:"rodrigo cueva pastor gladys",
        rEmail:"pruebaRodrigo@gmail.com",
        rPassword1:"123456",
        rPassword2:"123456"

    });


    const {lEmail,lPassword} = formLoginValues;

    const {rName,rEmail,rPassword1,rPassword2} = formRegisterValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        
        dispach(startLogin(lEmail,lPassword));

        history.push("/")
    }
    
    const handleRegister= ( e)=>{
        e.preventDefault();

        if (rPassword1!==rPassword2){
            return Swal.fire("Error","Las contraseñas deben ser iguales.","error")
        }
        dispach(startRegister(rEmail,rPassword1,rName));

        history.push("/")

    }
    

    const handleLogout = () =>{
        dispach(startLogout());
        history.push("/")

    }


    


    return (
        <>   

               <form onSubmit={handleRegister}>

                    <input type="text" placeholder="Nombre"
                            name="rName"
                            value={rName}
                            onChange={handleRegisterInputChange}
                    />
                    <input type="email" placeholder="Email" 
                            name="rEmail"
                            value={rEmail}
                            onChange={handleRegisterInputChange}
                            />
                    


                    <input type="password" placeholder="Contraseña"
                            name="rPassword1"
                            value={rPassword1}
                            onChange={handleRegisterInputChange}
                    
                            />

                    <input type="password" placeholder="Contraseña"
                            name="rPassword2"
                            value={rPassword2}
                            onChange={handleRegisterInputChange}
                    
                            />


                    

                    <input type="submit" value="Register"/>
                    
                    


               </form>

            <hr/>

            <button 
            onClick={handleLogout}
            className="btn btn-danger">
                LOGOUT
            </button>

           
        
        </>
    )
}
