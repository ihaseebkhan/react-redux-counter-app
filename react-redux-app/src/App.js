import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function App() {
const dispatch = useDispatch();
const count = useSelector((state)=>state.count)
const [value, setValue] = useState('');

console.log (count)

const increment = () => {
  dispatch({type:'increment'})
}

const decrement = () => {
  dispatch({type:'decrement'})
}

const onInputChange = (e) => {
  setValue(Number(e.target.value))
}

const add = () => {
  dispatch({type:'add', payload:value})
}

const subtract = () => {
  dispatch({type:'subtract', payload:value})
}

const clear = () => {
  setValue('')
}

  return (
    <div style={{textAlign:'center'}}>
      <h1>Persisted Counter</h1>
      {count}
       <br/>
       <br/>
       <button onClick={increment} style={{marginRight: '5px'}} >Increment</button>
       <button onClick={decrement}>Decrement</button>
       <br/>
       <br/>
       <label>Input custom value: </label>
       <input type='number' style={{marginRight: '20px'}} onChange={onInputChange} value={value}/>
       <button onClick={add} style={{marginRight: '5px'}}>Add</button>
       <button onClick={subtract} style={{marginRight: '5px'}}>Subtract</button>
       <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
