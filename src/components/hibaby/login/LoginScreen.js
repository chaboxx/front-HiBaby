
import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startLogout, startRegister } from '../../../actions/auth';
import { useForm } from '../../../hooks/useForm';
import Swal from 'sweetalert2'
import { Link, Redirect, useHistory } from 'react-router-dom';

export const LoginScreen = (isAuthenticated) => {

    

    //HISTORY USE HISTORY
    const history = useHistory();
    
    
   
    const dispach = useDispatch();


    const [formLoginValues,handleLoginInputChange]=useForm({
        lEmail:"pruebaRodrigo@gmail.com",
        lPassword:"123456"
    });

   


    const {lEmail,lPassword} = formLoginValues;



    const handleLogin = (e) =>{
        e.preventDefault();
        
        dispach(startLogin(lEmail,lPassword));

        //history.push("/")
    }
    
    
    //console.log("==================> ",!!isAuthenticated);

   


    


    return (
        <>  
        

            <div>
                <form onSubmit={handleLogin }>

                    <input type="email" placeholder="Email" 
                            name="lEmail"
                            value={lEmail}
                            onChange={handleLoginInputChange}
                            />
                    
                    <input type="password" placeholder="Contraseña"
                            name="lPassword"
                            value={lPassword}
                            onChange={handleLoginInputChange}
                    
                            />


                    <input type="submit" value="Login"/>
                    
                   
               </form>

                <div>

                    <Link to="/register">
                        Registrarse
                    </Link>

                </div>
                 

               </div>
        
        </>
    )
}
