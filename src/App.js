import React , {Component} from 'react';
import "./App"
import Registration from './Components/Registration';
import Greeting from './Components/Greeting.js';

class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      isRegistered:false,
      name:"null",
      email: "null",
      password:'null',
       
    }
  }
  
  eventHandler=(e)=>{
    e.preventDefault();
    const name= e.target.name.value;
    const email= e.target.email.value;
    const password= e.target.password.value;
    this.setState({name,email,password, isRegistered : "true"},()=>{
      console.log(this.state.isRegistered)}
    )};
    clickHandler=(e)=>{
      e.stopPropagation();
      this.setState({ isShow: !this.state.isShow})
      
     }
    
    
  render(){
    return(
      <div>
       {this.state.isRegistered ? 
       (<Greeting name={this.state.name}  email={this.state.email}/>) 
       : (<Registration submit={this.eventHandler} isShow={this.state.isShow} click={this.clickHandler}/>)}
      </div>
    )
  }
}
export default App;