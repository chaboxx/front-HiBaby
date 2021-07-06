

import React, { useState } from 'react'

import axios from "axios";

const apiDespacho = axios.create();

export const DespachoPagos = () => {

    const [productosDespacho, setProductosDespacho] = useState([])

    const carritoId=localStorage.getItem("idCarrito")
    
    apiDespacho.post("http://localhost:4000/api/checkout/carrito-compras/",{

        "carritoId":carritoId
    })
    .then(res=>{
        console.log(res.data.catalogoCompras.productos)
        setProductosDespacho(res.data.catalogoCompras.productos)
    }).catch(error=>{
        setProductosDespacho([])
    })
    
    
    
    return (
        <div>
            <h1>Despacho:</h1>
            <hr/>
            <div>
                <h4>Resumen productos:</h4>
                {
                    productosDespacho.map((producto,index)=>{
                        
                        return(

                            <div key={index}>
                            <p>Nombre: {producto.nombre}</p>
                            <p>Precio: {producto.precio}</p>
                        </div>

                        )   
                       
                    })
                }
            </div>
            <div>
                <span>Direccion:</span>
                <input type="text" />
            </div>
        </div>
    )
}


