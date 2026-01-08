export default function Tarea({ titulo, aEliminar}) {
    const estiloCard = {
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '10px',
        margin: '5px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#fff'
    };

    const estiloBoton = {
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '5px 10px',
        cursor: 'pointer'
    };

    return (
        <div style={estiloCard}>
            <span>{titulo}</span>
            <button style={estiloBoton} onClick={aEliminar}>
                Eliminar
            </button>
        </div>
    );
}