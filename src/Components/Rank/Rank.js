import React from 'react';

class Rank extends React.Component{
    render(){
        const { user } = this.props;
        const name = user.name;
        const username = name.toUpperCase();
        console.log(username)
        return(
            <div className='tc'>
            <div className='f4'>
            <p><span><strong>{username}</strong></span>,  your current score is</p>
            </div>
           
            <div className="f2">
            <p>{user.enteries}</p>

            <h6>Register in : {user.joined}</h6>
            </div>
        </div>

        )
    }

} 
export default Rank;