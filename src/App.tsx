import React, {useState} from 'react';
import {createElement as e} from "react";

function App() {
    const [count, setCount] = useState(0)
    return e('div', {className: 'container'}, [
        e('h2', {className: 'title', key: 1}, `${count} Test`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick: () => setCount(count + 1)
        }, 'Click me!'),
    ])
}

export default App;
