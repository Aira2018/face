import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    console.log('is sign in',{isSignedIn})
    
    if (isSignedIn){
        return(
            <nav style={{display : 'flex', justifyContent : 'flex-end'}}>
                <p 
                onClick={() => onRouteChange('signout')}
                className='underline pointer dib mr3 br3 pd3 f3 link dim black '>Sign out
                </p>
            </nav>
        );  
    }else{
        return(
            <nav style={{display : 'flex', justifyContent : 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')}
                    className='underline pointer dib mr3 br3 pd3 f3 link dim black '>Sign In</p>
                <p onClick={() => onRouteChange('register')}
                className='underline pointer dib mr3 br3 pd3 f3 link dim black '>Register</p>
            </nav>
        );   
    }           
        
}
export default Navigation;