import React from 'react'
import { useState } from 'react'

const Register = () => {

const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');
const [confirm, setConfirm] = useState('');

const [error, setError] = useState (false);

const ValidarDatos = (e) => {
    e.preventDefault ()

    if (!email.trim() || !contraseña.trim() || !confirm.trim()) {
       setError("Todos los campos son obligatorios");
       return
    }

    else if (contraseña.length < 6 || confirm.length < 6) {
      setError("La contraseña debe tener al menos 6 carácteres")
      return

    }

    else if (contraseña !== confirm) {
      setError("Las contraseñas deben coincidir")
      return
    }

     setError("Registro exitoso");
     setEmail("");
     setContraseña("");
     setConfirm("");

}

  return (

<div>
<form className="formularioReg" onSubmit={ValidarDatos}>
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
<div className="form-group">
<label>Confirmar contraseña</label>
<input
type="text"
name="confirm"
className="form-control"
onChange={(e) => setConfirm(e.target.value)}
value={confirm}
/>
</div>
<button type="submit" className="btn
btn-primary">Enviar</button>
</form>
    </div>
  )
}

export default Register
