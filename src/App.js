import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import db from './firebase'
import { addDoc, collection, CollectionReference, doc, onSnapshot, setDoc } from 'firebase/firestore';
import {handleNew} from './util'
import {handleEdit} from './util'
import { handleDelete } from './util';
import Dot from './Dot'

function App() {
  const [colors , setColors] = useState([])
  console.log(colors)
  useEffect(
    () => 
      onSnapshot(collection(db, "cololrs"), (snapshot) => 
        setColors(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
        ),
        []
    );
   
  return (
    <div className="App">
      <button onClick={handleNew} className='button'>New</button>
      <ul>
       {colors.map(x => {
         return <li key={x.id}>
          <button className='button2' onClick={()=> handleEdit(x.id)} href="#">edit</button> <Dot color={x.value} />  {x.name}
          <button className='button3' onClick={()=> handleDelete(x.id)}>Delete</button>
        </li>
        })}
       
      </ul>
    </div>
  );
}

export default App;
