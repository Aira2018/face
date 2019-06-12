import React from 'react';

class Rank extends React.Component{
    render(){
        console.log('from the rank',this.props.name)
        return(
            <div className='tc'>
            <div className='f4'>
            <p>Raj,  your current score is</p>
            </div>
            <div className="f2">
            <p>#4</p>
            
            </div>
        </div>

        )
    }

} 
export default Rank;