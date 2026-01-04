
import { useState } from 'react';

export default function InputConsola() {
    const [texto, setTexto] = useState('');

    const manejarCambio = (e) => {
        setTexto(e.target.value); 
    };

    const imprimir = () => {
        console.log("El valor del texto es:", texto);
    };

    return (
        <div>
            <p>Escribe algo y mira la consola (F12):</p>
            <input type="text" value={texto} onChange={manejarCambio} placeholder="Escribe aquí..." />
            <button onClick={imprimir} >
                Imprimir
            </button>
        </div>
    );
}