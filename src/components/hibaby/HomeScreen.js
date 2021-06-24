import React, { useState } from 'react';

import {Navbar_} from '../ui/navbar';
import {Footer} from "../ui/footer";

import hibaby_fblanco from "../../assets/hibaby_fblanco.jpg"


import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";


import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from "reactstrap";


const apiStore= axios.create();

export const HomeScreen = () => {

  
    apiStore.get(
        "http://localhost:4000/api/store/"
    ).then(res=> setproductos(res.data.productos))
    
    
    const state=  useSelector( state=> state.ui);


   

    
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
        <div>   

            <header>
                <Navbar_/>
            </header>
        
            <section id="menu_principal">

                <div>
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

                </div>
            </section>
                <div>
                    <h3 style={{
                        display:"flex",
                        justifyContent:"center",
                        fontSize:"3rem",
                        marginTop:"25px"
                    }}>Ofertas!!!</h3>
                </div>
            <section id="seccion_ofertas">


                    <img src={hibaby_fblanco} alt="ofertas1"/>
                    
                    <img src={hibaby_fblanco} alt="ofertas2"/>
                    
                    <img src={hibaby_fblanco} alt="ofertas3"/>

                
            </section>
                   

            <footer>

               <Footer/>
            </footer>

        </div>

    )
}
