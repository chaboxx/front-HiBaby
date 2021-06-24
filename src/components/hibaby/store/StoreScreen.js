import React, { useState } from 'react';


import { Footer } from '../../ui/footer';
import { Navbar_ } from '../../ui/navbar';

import axios from "axios";
import { CardProduct } from './CardProduct';


const apiStore= axios.create();
export const StoreScreen = () => {

    const [productos, setproductos] = useState([])

    
    apiStore.get(
        "http://localhost:4000/api/store/"
    ).then(res=> setproductos(res.data.productos))
    


    const [nombre, setNombre] = useState("")


    const handleInputNombreChange = (e) =>{

        
        setNombre(e.target.value)
    }

    const productosFiltrados = () =>{

        return productos.filter(producto=>{
            return (producto.nombre.includes(nombre))
        })

    
    }

    const listaCategorias=[];

    const listaTallas =[];
    return (
        <>
            <header>
                
                <Navbar_/>
            
            </header>    
            <div className="container">


            
            <aside> 

                <h5>Filtrar por:</h5>
                
                <hr/>

                <div>
                    <p>Categorias</p>

                    <ul style={{
                        border:"1px solid black"
                    }}>

                    {
                        productos.map(e=>{
                            
                            if (!listaCategorias.includes(e.categoriaGeneral)){
                                listaCategorias.push(e.categoriaGeneral)
                                return (
                                    <li>
                                    {e.categoriaGeneral}
                                </li>
                            )
                        }
                                
                        }
                        )
                    }
                    </ul>
                </div>

                <hr/>

                <div>
                    <p>Talla:</p>
                    <ul style={{
                        border:"1px solid blue"
                    }}>
                        {   
                            productos.map(e=>{
                            })
                        }


                    </ul>

                </div>


                <div>


                </div>


            </aside>

            <div>
               
       

        
                <div className="mb-4 mt-3">
                    

                    <input className="form-control" type="text" 
                        placeholder="Filtar por nombre"
                        style={{
                            width:"30%"
                        }}

                        value={nombre}
                        onChange={handleInputNombreChange}
                    />




                </div>

            
            
            
            
            
            
            
            
            
            <div id="cartas" style={{
                
            }}
                className="row"
            >
               
                        {
                            productosFiltrados().map(
                                producto=> <CardProduct producto={producto} key={producto.id}
                                            />
                                            
                                
                            )

                        }
                    
                        
                
            
            </div>

            </div>
        </div>

            <footer>
                 <Footer/>

            </footer>
        </>
    )
}
