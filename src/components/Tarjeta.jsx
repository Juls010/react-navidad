import Contenido from './Contenido'; 

export default function Tarjeta({ titulo, contenido }) {
    const estiloTarjeta = {
        border: '2px solid #333',
        borderRadius: '10px',
        padding: '15px',
        margin: '10px', 
        backgroundColor: '#fff',
        maxWidth: '300px'
    };

    return (
        <div style={estiloTarjeta}>
            <h2 style={{ color: 'blue' }}>{titulo}</h2>
            <Contenido contenido={contenido} />
        </div>
    );
}