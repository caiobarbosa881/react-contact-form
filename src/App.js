import React from 'react';
import './App.css';
import MainForm from './components/MainForm';

function App() {

  return (
    <>
    <img className='box-image' alt='Pessoa empurrando caixa com uma seta em direção para o formulário na direita em que você vai preencher' src={require('./box-img.png')}/>
    <MainForm />
    </>
  );
}

export default App;
