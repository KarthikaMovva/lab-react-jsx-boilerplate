import { Component } from "react";
import "./App.css"
import imageData from './Components/Datacomponent';

export default class AppClass extends Component{
  
  // code here
  render(){
  let set = imageData()
  return(
    <div>
      <h1 className='title'>Kalvium gallary</h1>
      <div className='Table'>
       {set.map(function(e,i){
        return <img src={e.img} className='Picture' key={e.id}/>
       })}
      </div>
    </div>
  )
      }
}
