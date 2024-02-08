import elephant from "../images/elephant.jpeg";
// import App from "../App"
import AppClass from "../AppClass"
import { Component } from "react";
const imageData = ()=>{
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
class Importcomponent extends Component{
  constructor(){
    super()
  }
  render(){
  const list=imageData()
  return (<div>
    {/* <App imported={list}/> */}
    <AppClass imported={list}/>
  </div>)
  }
}



  export default Importcomponent;