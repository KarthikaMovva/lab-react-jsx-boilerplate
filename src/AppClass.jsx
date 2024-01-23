import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
  let set = this.imageData()
  return(
    <div>
      <h1 className='title'>Kalvium gallary</h1>
      <div className='Table'>
       {set.map(function(e,i){
        return <img src={e.img} className='Picture' />
       })}
      </div>
    </div>
  )
      }
}
