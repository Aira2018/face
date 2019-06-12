import React from 'react';

const FaceRecognation = ({imageUrl, box}) => {
        return(
            <div className='center mt3 mb4'>
                <div className="absolute mt2">
                    <img id="inputimage" alt='' src={ imageUrl }
                    height="500px" width="auto"/>
                    <div className="bounding-box" style={{top : box.topRow, right : box.rightCol, bottom : box.bottomRow, left : box.leftCol }}></div>
                </div>
            </div> 
        ); 
}
export default FaceRecognation;