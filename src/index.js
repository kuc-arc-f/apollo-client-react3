import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
/*
client.query({
  query: gql`
  query {
    todos {
      id
      title
    }
  }
  `
}).then(result => console.log(result));
*/
