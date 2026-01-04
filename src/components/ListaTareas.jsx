import Tarea from "./Tarea";
import { useState } from 'react';

export default function ListaTareas({ tareasIniciales }) {
    const [lista, setLista] = useState(tareasIniciales);
    
    const borrarTarea = (indiceBuscado) => {
        const nuevaLista = lista.filter((e, index) => index !== indiceBuscado);
        setLista(nuevaLista);
    };

    if (lista.length === 0) {
        return <p>Geniaaal, has completado las tareas!</p>;
    }

    return (
        <div style={{ maxWidth: '400px', margin: '20px 0' }}>
            {lista.map((textoTarea, index) => (
                <Tarea 
                    key={index} 
                    titulo={textoTarea}
                    aEliminar={() => borrarTarea(index)} 
                />
            ))}
        </div>
    );
}