import React from 'react';
import '../styles/Loading.css';
import load from '../img/load.gif';

function Loading() {
  return (
    <div className="loading-container">
      <img className="loading-img" src={ load } alt="loading" />
      <h4>Carregando...</h4>
    </div>
  );
}

export default Loading;
