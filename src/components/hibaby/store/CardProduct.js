import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";



export const CardProduct = ({producto}) => {

    const items=producto.colores;

    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item._id}
        >
            <img className="img-fluid" style={{
                height:"400px"
            }} src={item.urlImagenes[0]} alt="..." />
            <CarouselCaption captionText={item.genero} captionHeader={item.genero} />
        </CarouselItem>
        );
    });

    return ( 
        <>
    
    <div className="col-6">
        
    <div id="contenedor">
  <div id="colores_tallas">
    <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div>
    <div>
        <p>
            Colores:
        </p>
        <ul id="colores_" className="row" style={{
            
        }}>
            {/*
                producto.image.map((colores)=>{

                    return(<li
                className="imagenes__ col-2"
                >
                    <Link to="/">

                    <img src={colores} alt="..."
                    height="40px"
                    width="40px"
                    />
                    </Link>

                    </li>
                    )
                
            }
            )
            */
            }
        </ul>
    </div>
    <div>

        <p>Tallas:</p>
        <ul id="tallas">
            <div className="sizes">
                {
                    producto.colores.map(talla=>(
                        <button className="btn btn-dark">
                        
                        {talla.tallas[0].nombreTalla}
                        </button>
                        )
                        )
                }
            </div>
        </ul>
    </div>


    </div>
  </div>


  <div id="descripcion_producto">
    <p>{producto.categoriaGeneral}</p>
    <h1 style={{
        fontSize:"25px",
        display:"flex",
        fontWeight:"45px",
        justifyContent:"center"
    }}>{producto.nombre}</h1>
    <h2>S/{producto.precio}</h2>
    <p className="desc">
        {producto.descripcion}
    </p>
    <div className="buttons">
      <button className="btn btn-danger">Añadir al carrito</button>
      
    </div>
  </div>
  
</div>


    
</div>
        </>
        
    )
    
}
