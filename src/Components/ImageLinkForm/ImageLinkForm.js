import React from 'react';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div className='f3 tc'>
            <h3>Image Link Form, <strong>Smart Brain </strong> find the face!!</h3>
            <div className='center'>
                <div>
                    <input className='f4' type='text' onChange={onInputChange}/>
                    <button className='mt1 grow'
                    onClick={onButtonSubmit}>Detect Face</button>
                </div>
                    
            </div>
          
        </div>

    );
}
export default ImageLinkForm;