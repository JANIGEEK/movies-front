import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
      email:"",
      password:""
    })

    const { email, password} = formData

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]:e.target.value
      }))
    }

    const onSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <section className="container py-5">
        <section className="container header">
          <h4> Entrar a la App</h4>
          <p>Por favor escribe tus credenciales</p>
        </section>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email"
                className='form-control' 
                id='email' 
                name='email'
                value={email}
                placeholder="Ingresa tu email por favor"
                onChange={onChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password"
                className='form-control' 
                id='password' 
                name='password'
                value={password}
                placeholder="Ingresa tu password por favor"
                onChange={onChange}
              />
          </div>

          <button type="submit" className="btn btn-success my-3">Ingresar a la App</button>
        </form>
      </section>
  );
};

export default Login;
