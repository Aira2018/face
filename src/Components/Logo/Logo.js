import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'


const Logo = () =>{
    return(
        <div>
            <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner"><img alt = 'logo' src = {brain} height='120px' width='120px'></img></div>
            </Tilt>
          
        </div>

    );
}
export default Logo;