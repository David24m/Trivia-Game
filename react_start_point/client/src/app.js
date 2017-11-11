import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsContainer from "./containers/QuestionsContainer"

window.addEventListener('load', function () {
  ReactDOM.render(
    <QuestionsContainer />,
    document.getElementById('app')
  );
});
