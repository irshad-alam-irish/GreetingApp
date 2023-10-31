import React from 'react'
import './Greeting.css'

function Greeting(props) {
  return (
    <div id="greetings">
      <div className='div11'>
        <div className='greet1'><h1>Hello <span className='name1'>{props.name},</span> yayy <span className='congo1'>Congratulations</span>, you are about to join, by mail: {props.email}, <span className='irish1'>Irish</span> will be considring your application Soon!</h1>
        </div>
      </div>
      <div className='div22'>
        <img id="bachha" src={require('./pics/bacha.png')} alt="" />
      </div>
    </div>
  )
}
export default Greeting;
