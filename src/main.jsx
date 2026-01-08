import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludo from './components/Saludo'
import Perfil from './components/Perfil'
import Tarjeta from './components/Tarjeta'
import BotonAlerta from './components/BotonAlerta'
import InputConsola from './components/InputConsola'
import ListaFruta from './components/ListaFruta'
import Contador from './components/Contador'
import FormularioNombre from './components/FormularioNombre'
import ListaTareas from './components/ListaTareas'
import LoginForm from './components/LoginForm'

const frutasFav = ['Manzana', 'Fresa', 'Melón', 'Uva'];
const misTareas = ['Regar las plantas', 'Andar en la cinta', 'Llamar a Manoli', 'Sacar la basura'];

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Saludo nombre="Paloma" />
    <Perfil nombre="Pepe" edad="22" profesion="estudiante" />
    <Perfil nombre="JoseMari" edad="78" profesion="jubilado" />
    <div style={{ 
        display: 'flex'
    }}><Tarjeta titulo="Uno" contenido="Tarjeta uno." />
    <Tarjeta titulo="Dos" contenido="Tarjeta dos." />
    <Tarjeta titulo="Tres" contenido="Tarjeta tres." />
    </div>
    <BotonAlerta />
    <InputConsola />
    <ListaFruta frutas={frutasFav} />
    <Contador />
    <FormularioNombre />
    <ListaTareas tareasIniciales={misTareas} />
    <hr />
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LoginForm />
    </div>
    <hr />
</StrictMode>,
)

