import { useState } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);

    return (
        <div className="containerStyle">
            <p className="pStyle">Contador: {count}</p>
            <button className="buttonStyle" onClick={increment}>Incrementar</button>
        </div>
    );
}