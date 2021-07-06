import React, { useEffect, useState } from 'react';

import {Navbar_} from '../ui/navbar';
import {Footer} from "../ui/footer";

import hibaby_fblanco from "../../assets/hibaby_fblanco.jpg"


import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import {FaArrowCircleRight,FaArrowCircleLeft} from "react-icons/fa";

import {RiCheckboxBlankFill,RiCheckboxBlankLine} from "react-icons/ri"

const apiStore= axios.create();

const apiCarrito = axios.create();
  
export const HomeScreen = () => {
      
      const [portadaProductos, setPortadaProductos] = useState([])
      //PETICIONES

      useEffect(() => {
        
            apiCarrito.post("http://localhost:4000/api/checkout/carrito-compras/crear-carrito")
                .then(res=>{
                    console.log("Refresh")
                    localStorage.setItem("idCarrito",res.data.carrito._id)
                
                })
          
      }, [apiCarrito])
      
    
    useEffect(() => {
        
        apiStore.get(
            "http://localhost:4000/api/store/"
        ).then(res=>{
            
            console.log(res.data.productos)
            
            setPortadaProductos(res.data.productos)
            
        })
        
    }, [portadaProductos])


    const [inicio2, setInicio2] = useState(0)
    const [final2, setFinal2] = useState(4)

    const nextCarruselInfinitoMasVendidos=()=>{
        let longitudCarrusel=portadaProductos.length;

        if (final2<longitudCarrusel){
            setInicio2(inicio2+1)
            return setFinal2(final2+1)
        }
    }

    const previousCarruselInfinitoMasVendidos=()=>{
        if(inicio2>0){
            setFinal2(final2-1)
            return setInicio2(inicio2-1)
        }

    }

    
    const [inicio, setInicio] = useState(0)
    const [final, setFinal] = useState(4)

    const nextCarruselInfinito=()=>{
        let longitudCarrusel=portadaProductos.length;

        if (final<longitudCarrusel){
            setInicio(inicio+4)
            return setFinal(final+4)
        }
        
        
    }

    const previousCarruselInfinito=()=>{
        let longitudCarrusel=portadaProductos.length;

        if(inicio>0){
            setFinal(final-4)
            return setInicio(inicio-4)
        }
        
    }

    
    const state=  useSelector( state=> state.ui);
    
   

    const length= portadaProductos.length; 

    const [current, setCurrent] = useState(0)

    const nextSlide = () =>{    
        setCurrent(current===length-1 ? 0 : current+1)
    }
    console.log(current)
    const previousSlide = ()=>{
        setCurrent(current===0 ? length-1 : current-1)
    }

    const slideCurrent = (index)=>{
        setCurrent(index)
    }

    const [currentFav, setcurrentFav] = useState(5)

    const nextSlideFav=()=>{
        setcurrentFav()
    }
    const prevSlideFav = () =>{


    }



    return (
        <div>   

            <header>
                <Navbar_/>
            </header>
        
            <section id="carrusel_fotos_portada">
                <div id="caja_carrusel_fotos">
                    

                <FaArrowCircleLeft id="flechita_izquierda" onClick={previousSlide}/>
                <FaArrowCircleRight id="flechita_derecha" onClick={nextSlide}/>
                {
                    portadaProductos.map( (foto,index) =>{
                        return (
                            <>
                            <div className="">
                            {   
                                index===current && (
                                    
                                    <img id="imagen_carrusel" 
                                    src={foto.colores[0].urlImagenes[0]} 
                                    alt="...." 
                                    />
                                    )
                                    
                                }
                            </div>
                            
                            
                            
                            </>
                            )   
                        })
                }
        
                </div>


                <div id="cuadritos_carrusel">
                {
                    portadaProductos.map((boton,index)=>{
                        
                        return(
                            current===index ? 
                            <RiCheckboxBlankFill
                             id="cuadrito_carrusel_lleno"
                            onClick={()=>slideCurrent(index)} 
                            /> : 
                            <RiCheckboxBlankLine
                            id="cuadrito_carrusel_vacio"
                            onClick={()=>slideCurrent(index)}
                            />    
                            
                            )
                        })
                    }
             
                </div>
                
            </section>
            <section className="triada_home">

                <div className="productos_triada_home">

                    <div className="triada_izquierda">
                        <img src={hibaby_fblanco} />
                    </div>
                    
                    <div className="triada_derecha arriba">
                        <img src={hibaby_fblanco} />
                            
                    </div>
                    
                    <div className="triada_derecha abajo">
                        <img  src={hibaby_fblanco} />
                            
                    </div>
                    
                </div>

            
            
            
            </section>
                   

            <section>
                    <div className="">
                         <span>
                            Nuestros Productos Favoritos    
                        </span>
                        <FaArrowCircleLeft className="flechita_favorito_izquierda" onClick={previousCarruselInfinito}/>

                        <FaArrowCircleRight className="flechita_favorito_derecha" onClick={nextCarruselInfinito}/>
                        
                        <div className="productos_favoritos">
                        {
                            portadaProductos.map((producto,index)=>{
                                return ( 
                                    (index >= inicio && index < final ) && (
                                        <div className="item_favorito">

                                        <img className="imagen_favorito_carrusel" 
                                        src={producto.colores[0].urlImagenes[0]} 
                                        alt="...." 
                                        />
                                        </div>
                                    )
                                
                                    )
                                })
                            }
                   
                    
                        </div>

                    </div>

            </section>
            
            <section>
                <div>
                    <span>Nuestros Productos mas vendidos</span>
                </div>
                            
                

                <div className="productos_favoritos">
                <FaArrowCircleLeft className="flechita_favorito_izquierda" onClick={previousCarruselInfinitoMasVendidos}/>

                <FaArrowCircleRight className="flechita_favorito_derecha" onClick={nextCarruselInfinitoMasVendidos}/>
                    {
                        portadaProductos.map((producto2,index)=>{
                            return (
                                (index>=inicio2 && index<final2) && (
                                    <div className="item_favorito">

                                        <img className="imagen_favorito_carrusel" 
                                        src={producto2.colores[0].urlImagenes[0]} 
                                        alt="...." 
                                        />
                                    </div>
                                )
                            )
                        })   
                    }

                </div>
            </section>
            
            <footer>

               <Footer/>
            </footer>

        </div>

    )
}
