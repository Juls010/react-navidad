import { useForm } from 'react-hook-form';

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const alEnviar = (data) => {
        console.log("Datos enviados correctamente:", data);
        alert(`Bienvenidx, ${data.email}`);
    };

    const estiloForm = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        maxWidth: '300px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
    };

    const estiloError = {
        color: 'red',
        fontSize: '12px'
    };

    return (
        <form onSubmit={handleSubmit(alEnviar)} style={estiloForm}>
            <h3>Iniciar Sesión</h3>
            <label>Email:</label>
            <input type="email" {...register("email", { required: "El email es obligatorio", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Eso no parece un email válido"}})}/>
            
            {errors.email && <span style={estiloError}>{errors.email.message}</span>}

            <label>Contraseña:</label>
            <input type="password" {...register("password", { required: "La contraseña es obligatoria", minLength: { value: 6, message: "Minimo 6 caracteres"}})}/>
            
            {errors.password && <span style={estiloError}>{errors.password.message}</span>}
            <button type="submit">Entrar</button>
        </form>
    );
}   