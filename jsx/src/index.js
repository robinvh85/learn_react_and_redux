// Import the React and ReactDom libaries
import React from 'react';
import ReactDom from 'react-dom';

function getTwo() {
  return 'Two';
}

// Create a react component
const App = () => {
  const one = 'One'

  return (
    <div>
      <ul>
        <li>{one}</li>
        <li>{getTwo()}</li>
      </ul>
    </div>);
}

// Take the react component and show it to screen
ReactDom.render(
  <App />,
  document.querySelector('#root')
);