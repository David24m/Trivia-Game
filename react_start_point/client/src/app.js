import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./homepage.js"

window.addEventListener('load', function () {
  ReactDOM.render(
    <Homepage />,
    document.getElementById('app')
  );
});
