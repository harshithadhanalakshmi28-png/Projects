import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="app">
            <h1>State Management Challenge</h1>

            <div className="counter-card">
                <h2>React Counter</h2>

                <p className="count">{count}</p>

                <div className="buttons">
                    <button onClick={decrease}>−</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={increase}>+</button>
                </div>
            </div>
        </div>
    );
}

export default App;