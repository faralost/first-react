import React from 'react';
import {createElement as e} from "react";

function App() {
  // return (
  //     <h1>Hello, FARALOST</h1>
  // )
  return e('div', {className: 'container'}, [
      e('h2', {className: 'title'}, 'Test'),
      e('button', {className: ''}, 'Click me!'),
  ])
}

export default App;
