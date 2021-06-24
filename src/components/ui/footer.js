import React from 'react';



export const Footer = () => {
    return (
        <div id="foot">
            <div id="contacto">

                <p>
                    Quienes Somos? 
                    <br/>
                    Somos una empresa que quiere darte lo mejor !!!
                </p>

                <p>
                    Contacto:
                    <br/>
                    chaboxx159@gmail.com
                </p>
                
                <p>
                    Creado por: @chaboxxsama
                </p>
                
                
                
            
            </div>

            <div id="ubicacion">
                <p>Ubicacion</p>


                <div id="mapa">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.0038410208986!2d-71.96470048503721!3d-13.535355575056833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5f03144cae5%3A0xfb5de8e12e3e42fb!2sCentro%20Comercial%20%22El%20Molino%20I%22!5e0!3m2!1ses!2spe!4v1618242086616!5m2!1ses!2spe" 
                width="400" height="300" style={{
                    border:"0"
                }}
                loading="lazy">
                </iframe>

                </div>
            </div>

            
        </div>
    )
}
