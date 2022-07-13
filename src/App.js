import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement, IncrementFive, DecrementFive } from './Components/Actions/IncDec'
import { useEffect,useState } from 'react';
import axios from 'axios';

function  App()  {

  const [image, setImage]=useState()


  useEffect(() => {
      async function getData(){
        const res = await axios.get('https://fakestoreapi.com/products/1');
        console.log(res.data);
        console.log(res.data.id)
        setImage(res.data.image);
      };

      getData();
  },[])


  const state = useSelector((reducers) => reducers.ChnageTheNumber);
  const stateFive = useSelector((reducers) => reducers.changeNumberByFive);
  const dispatcher = useDispatch();

  // fetch('https://fakestoreapi.com/products/1')
  // .then(response => response.json())
  // .then(data => { console.log(data); apiData = data; })
  // .catch(err => console.error(err));

  return (
    <><h1>Hello Redux Toolkit</h1>
      <p>{image}</p>
      <img src={image} alt="nit"/>
      <h3>{state}</h3>
      <button onClick={() => dispatcher(Increment())}>Inc</button>
      <button onClick={() => dispatcher(Decrement())}>Dec</button>
      <div></div>

      <br></br>

      <h1>Hello Redux Toolkit</h1>
      <h3>{stateFive}</h3>
      <button onClick={() => dispatcher(IncrementFive())}>Inc</button>
      <button onClick={() => dispatcher(DecrementFive())}>Dec</button>
    </>
  );
}

export default App;
