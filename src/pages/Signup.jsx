import React, { useState } from "react";

const Signup = () => {
  // informacion del ususario
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    isAdmin: false,
  });

  //Destructuracion de formData
  const { first_name, last_name, email, password, password2, isAdmin } =
    formData;

  //Escritura de cada input
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Envio de formulario
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container py-5">
      <section className="container header">
        <h4>Registrar nuevo usuario</h4>
        <p>Por favor crea un nuevo usuario</p>
      </section>

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
            value={first_name}
            placeholder="Ingresa tu nombre por favor"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
            value={last_name}
            placeholder="Ingresa tu apellido por favor"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Ingresa tu email por favor"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Ingresa tu password por favor"
            onChange={onChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            Confirmación de password
          </label>
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Ingresa tu password otra vez"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-success my-3">
          Crear usuario
        </button>
      </form>
    </section>
  );
};

export default Signup;
