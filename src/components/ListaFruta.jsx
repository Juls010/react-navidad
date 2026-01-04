import Fruta from './Fruta'

export default function ListaFruta({ frutas }) {
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <Fruta key={index} nombre={fruta} />
            ))}
        </ul>
    );
}   