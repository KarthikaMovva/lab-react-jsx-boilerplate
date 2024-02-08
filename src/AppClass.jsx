import "./App.css";
import { Component } from "react";
class AppClass extends Component{
    constructor(props){
     super(props)
    }
        render(){
            console.log(this.props.imported)
            return(
                <div>
                <h1 className='title'>Kalvium gallary</h1>
                <div className='Table'>
                 {this.props.imported.map((e,i)=>{
                  return <img src={e.img} className='Picture' key={i}/>
                 })}
                </div>
              </div>
            )
    }
}
export default AppClass;

