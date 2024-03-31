import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="col-md-3 my-2">
      <Link to={"/details/:id"}>
        <div className="card">
          <img
            
            alt="Pelicula"
            className="card-img-top"
            width="40"
          />
          <div className="card-body">
            <h3>Pelicula 1</h3>
            <h4>Año</h4>
            <p>Descripcion</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
