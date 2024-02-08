import './App.css';

function App(props) {
  // code here
  return(
    <div>
        <h1 className='title'>Kalvium gallary</h1>
        <div className='table'>
        {props.imported.map((e,i)=>{
                  return <img src={e.img} className='Picture' key={i}/>
                 })}
        </div>
    </div>
  )
}

export default App;
