import React, { Component } from 'react';


class TempDisplay extends Component{
render(){
    console.log(this.props)
    return(
        <div>
       
            <h2> City:{this.props.name}</h2>
            <h2> Temperature:{this.props.temperature}</h2>
            <h2> Description:{this.props.description}</h2>
            <h2> Min Temp:{this.props.tempMin}</h2>
            <h2> Max Temp:{this.props.tempMax}</h2>
            


        </div>
    )
}
}

export default TempDisplay