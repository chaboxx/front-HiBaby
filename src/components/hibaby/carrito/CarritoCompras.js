
import React,{useState} from 'react'

import axios from "axios";
import { DespachoPagos } from '../../checkout/despachoPagos';

import {LoginScreen} from "../login/LoginScreen";

import {Redirect,Link} from "react-router-dom";


export const CarritoCompras = () => {
    
    const [carrito, setCarrito] = useState([]);


    const apiCarrito=axios.create();
    
    const carritoId= localStorage.getItem("idCarrito")
    

    
    apiCarrito.post("http://localhost:4000/api/checkout/carrito-compras/",{

        "carritoId":carritoId
    })
    .then(res=>{
        setCarrito(res.data.catalogoCompras.productos)
    }).catch(error=>{
        setCarrito([])
    })
    

    const [bolsaDeCompra, setBolsaDeCompra] = useState(false)

    

    const registrado=!!localStorage.getItem("token")

    

    const comprarProductos = (productos)=>{
        
       
        
        
        
        
        
    }
        
    return (

    <div>



            <h1>CarritoCompras</h1>
            <hr/>

            <div>
                
                    {
                        carrito.map((producto,index)=>{
                            return (
                                <div key={index}>
                                    
                                    <h1>Nombre:</h1>
                                    <p>{producto.nombre}</p>

                                    <h1>Descripcion:</h1>
                                    <p>{producto.descripcion}</p>
                                    
                                    
                                    <h1>Precio:</h1>
                                    <p>{producto.precio}</p>

                                    {producto.colores.map(i=><img width="200px" src={i.urlImagenes[0]}/>)}
                                    <hr/>
                                </div>
                            )
                        })
                    }

            <div>
                <Link onClick={()=>comprarProductos(carrito)} to="/despacho">
                    Comprar Ahora...
                </Link>
            </div>
                
            </div>

    </div>
    )
}


