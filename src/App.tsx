import { useEffect, useState } from 'react';
import viteLogo from '/loader.svg';
import './App.css';

function App() {
const redirct=()=>{
  window.location.href = "https://www.tameeni.com/";
}
useEffect(()=>{
setTimeout(() => {
  redirct()
}, 6000);
},[])
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt=" logo" />
        </a>
      </div>
      <div className="card">
        <p>
        ... الرجاء الانتظار 
        </p>
      </div>
      <p className="read-the-docs">
أهلا بك في تأميني 
      </p>
    </>
  );
}

export default App;
