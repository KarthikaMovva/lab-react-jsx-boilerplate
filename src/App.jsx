import './App.css';
import imageData from './Components/Datacomponent';


function App(props) {
  // code here
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

export default App;
