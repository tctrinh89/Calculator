// import {useState} from '.react' 
import {useState} from 'react' 
import Calculator from './Calculator';


function App() {

  const [show,setShow]=useState(false)
  return (
    <div className="App">
        <div style= {show === false ? {display :'block'} : {display:'none'}} className='ketthuc'>
        
            <button onClick={()=>setShow(!show)} style={{width:100,height:40}}>Bắt Đầu</button>
        </div>
        {show && <Calculator />}
    </div>
  );
}

export default App;
