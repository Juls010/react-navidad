export default function BotonAlerta() {
    const alerta = () => {
        alert("El kiwi además de una fruta es un tipo de ave 🧐")
    }

    const estilo = {
        padding: '10px 20px',
        backgroundColor: 'crimson',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer', 
        fontWeight: 'bold'
    };

    return <button style={estilo} onClick={alerta}>Dato curioso!</button>
}