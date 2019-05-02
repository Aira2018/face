import React, {Component} from 'react';
import 'tachyons';

class Navigation extends Component{
    render(){
        return(
            <div style={{display : 'flex', justifyContent : 'flex-end'}}>
                <p className='underline pointer dib mr3 br3 pd3 f3 link dim black '>Sign Up</p>
            </div>

        );
    }
}
export default Navigation;