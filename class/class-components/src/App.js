import React from 'react';
import './App.css';
import ClassComponents from './components/ClassComponents'

const dataBase = [
  {firstName: "Stefano", lastName:"Quiroz"},
  {firstName: "Louis", lastName:"Monark"}
]

function App() {
  const db = dataBase.map((items,index)=>{
    const {firstName,lastName} = items;
    return (
      <ClassComponents
        firstName={firstName}
        lastName={lastName}
        key={index}
      />
    )
  });
  return (
    <div className="App">
      {db}
      {/* {dataBase.map((items, index)=> (<ClassComponents {...items} key={index}/>))} */}
    </div>
  );
}

export default App;
