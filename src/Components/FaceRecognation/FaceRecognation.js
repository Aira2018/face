import React from 'react';

const FaceRecognation = ({imageUrl}) => {
        return(
            <div className='center mt3 mb4'>
                <img alt='face' src={ imageUrl }/> 
            </div>
        ); 
}
export default FaceRecognation;