import React from 'react'
import { useState } from 'react';

const Login = () => {

const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');

const [error, setError] = useState (false);

const ValidarDatos = (e) => {
    e.preventDefault ()

    if (!email.trim() || !contraseña.trim()) {
       setError("Todos los campos son obligatorios");
       return
    }

    else if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 carácteres")
      return

    }

     setError("Inicio de sesión exitoso");
     setEmail("");
     setContraseña("");

}

  return (

<div>
<form className="formulario" onSubmit={ValidarDatos}>
{error && <p>{error}</p>}
<div className="form-group">
<label>Email</label>
<input
type="text"
name="email"
className="form-control"
onChange={(e) => setEmail(e.target.value)}
value={email}
/>
</div>
<div className="form-group">
<label>Contraseña</label>
<input
type="text"
name="contraseña"
className="form-control"
onChange={(e) => setContraseña(e.target.value)}
value={contraseña}
/>
</div>
<button type="submit" className="btn
btn-primary">Enviar</button>
</form>
    </div>
  )
}

export default Login
