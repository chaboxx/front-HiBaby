import React, { createRef,useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch,faBars,faShoppingCart,faCarCrash,faShoppingBag,faCreditCard,faUsers} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"

import hibaby_fblanco from "../../assets/hibaby_fblanco.jpg"

export const Navbar_ = () => {
    
    

    let {name} = useSelector(state => state.auth) ;
    
    if (name===undefined){
        name="User"
    }

    return (
        
        <nav id="navbar">
            
            <div id="logo_navbar">
                <div>

                <Link to="/" >
                    <img id="logo_imagen" src={hibaby_fblanco}/>
                </Link>
                </div>
            </div>

    
            <div id="menu_navbar">
                <div>
                    <button>
                    <FontAwesomeIcon id="svg_menu" icon={faBars}/>
                    </button>
                    
                </div>
            </div>

            <div id="buscador_navbar">
                <div className="buscador_merca_navbar">
                    
                        

                    <input type="text" className="input_navbar"/>
                    
                    <button type="submit" className="boton_buscar_navbar over">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    
                </div>
            </div>
            
            <div id="carrito_navbar">
                <div>
                    <button>
                        <FontAwesomeIcon id="Rodrigo" icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        
            <div id="login_navbar">
                <div>

                    <button>
                        <FontAwesomeIcon icon={faUsers} />
                    </button>
                </div>
            </div>
        </nav>
    )
}
