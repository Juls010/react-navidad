export default function Perfil({ nombre, edad, profesion }) {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>{edad}</p>
            <p>{profesion}</p>
        </div>
    );
}