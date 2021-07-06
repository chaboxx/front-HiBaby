

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const MenuDesplegable = ()=>{
    
    

  

    function MenuItem(props){
        
        
        return (
            <div>

                
            <Link to={props.url}>
                {props.children}
            </Link>
            
            </div>
        )
    }
    const token = localStorage.getItem("token")
    

    return (
        <>
        
        
            {
                !!token ? <MenuItem url="/user" >
                    <span>Usuario</span>
                </MenuItem> :
                <MenuItem url="/login">
                    <span>Login</span>
                </MenuItem>
            }
        
       
            <MenuItem url="/pedidos" >
                
                    <span>Pedidos</span>
                
            </MenuItem>
        </>
    )
}


export const LoginPedidos = (props) => {
    
    const state = useSelector(state=>state)

    
    const [open, setOpen] = useState(false)

    return (
        <button onClick={()=>setOpen(!open)}>
            
            
            

            {open && props.children}
        </button>
    )
}

