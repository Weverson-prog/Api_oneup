import React from 'react'

import ReactDOM from 'react-dom';

import background from "./images/1.jpg";
import App from './App'


setTimeout(function(){
}, 300000)


ReactDOM.render(
  <React.StrictMode>
    <div style={{backgroundImage: `url(${background})`,backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}> 
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

