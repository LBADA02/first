import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hellow from './hellow/hellow';
import TextFeild from './formulaires/textFeild';
import Fruits from './Fruits/Fruits';
import Counter from './Counter/Counter';
import Event from './Events/Event';
import Furms from './formulaires/Furms';
import FruitListe from './Fruits/FruitListe';




const root = ReactDOM.createRoot(document.getElementById('root'));
let arrayFruit = ['Lemon','Orange','Apple','Orange']
root.render(
  
  <>
     <FruitListe fruits={arrayFruit}/>
  </>
  
  //<React.StrictMode>
/*
<>  

   <Furms/>

  <Event/>

  <h1>States : </h1>
  <Counter initalisation={100} pas={2} />


  <Fruits fruits={arrayFruit} />


    <Hellow name="EL BADAOUI" prenom="HAMZA" age="16" status="stagaire"/>
    <Hellow name="ICHAOUI" prenom="WALID" age="20" status="stagaire"/>
    <Hellow name="OUHATNA" prenom="IMRAN" age="22" status="stagaire"/>
  
    <TextFeild lable="Prenom" type="text" name="prenom" placeholder="votre prenom" >
      <p>Veillez entre votre Prenom</p>
    </TextFeild>
    <TextFeild lable="Age" type="number" name="age" placeholder="votre Agee" >
      <p>Veillez entre votre Age</p>
      <span>un random span</span>
      <a href=''> link </a>
      </TextFeild>

      
      </>*/
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
