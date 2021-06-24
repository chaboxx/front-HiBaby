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
                <div id="logo">
                    <img src={hibaby_fblanco} width="100%" height="50%"/>
                </div>
            </div>

    
            <div id="menu_navbar">
                <div>
                    <button>
                    <FontAwesomeIcon icon={faBars}/>

                    </button>
                </div>
            </div>

            <div id="buscador_navbar">
                <div>

                    <input type="text"/>
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            
            <div id="carrito_navbar">
                <div>
                    <button>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        
            <div id="login_navbar">
                <button>
                    <FontAwesomeIcon icon={faUsers} />
                </button>
            </div>
        </nav>
    )
}
