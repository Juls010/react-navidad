import { useState } from "react";

export default function FormularioNombre() {
    const [nombre, setNombre] = useState('');

    const manejarInput = (e) => {
        setNombre(e.target.value);
    };

    const estiloCaja = {
        padding: '20px',
        backgroundColor: '#e0f7fa',
        borderRadius: '10px',
        marginTop: '20px',
        border: '2px solid #00bcd4'
    };

    return (
        <div style={estiloCaja}>
            <input type="text" placeholder="Escribe tu nombre..." value={nombre} onChange={manejarInput} />
            <h2 style={{ color: '#006064' }}>
                Hola, {nombre ? nombre : 'desconocido'} 👋
            </h2>
        </div>
    );
}