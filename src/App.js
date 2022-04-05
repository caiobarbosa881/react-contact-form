import React from 'react';
import './App.css';
import MainForm from './components/MainForm';
import { useState, useEffect } from 'react';

function App() {

  const [box, boxAnimation] = useState(false);

  useEffect(() => {
    boxAnimation(true);
  }, [box])  

  return (
    <>
    <div className='main-text-box'>
    <h1>Vamos receber a sua</h1>
    <h1>mensagem!</h1>
    <h3>Fique a vontade e preencha o formulário ao lado e dentro de 48 horas vamos responder.</h3>
    </div>

    <img className={box ? 'box-image active' : 'box-image'} alt='Pessoa empurrando caixa com uma seta em direção para o formulário na direita em que você vai preencher' src={require('./images/box-img.png')}/>
    <MainForm />
    </>
  );
}
export default App;