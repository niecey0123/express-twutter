import React, { Component } from 'react';


class InputField extends Component{
   
 render(){
     return(
      
          
              <form onSubmit={this.handleForSubmit}>
  <input onChange={this.handleUserInput} type="text" placeholder="Enter Zipcode" />
  <input  type="submit" value="Submit" />
  </form>



     

       

     )
 }

}
export default InputField