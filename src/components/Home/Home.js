import React, {Component}  from 'react';



export default class Home extends Component{
   

render(){
    if(this.this.props.user){
        return(
            <h2>h1{this.this.props.user.first_name}{this.this.props.user.last_name}</h2>
        )
    }
    return(
        <div>
        <h2> your are not logged</h2>
        </div>
    )
}




}