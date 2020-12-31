import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './component/app/App';

ReactDOM.render(
  <Router  basename="/auth_task">
    <App />
  </Router>,
  document.getElementById('root')
);


