import React from "react";

const Details = () => {
  return (
    <div className="container p-5  m-5 d-flex justify-content-around align-content-center flex-wrap">
      <img  alt="Pelicula 1" />
      <div className="col-6">
        <p>
          <strong>Title: </strong>
          Pelicula 1
        </p>
        <p>
          <strong>Duration: </strong>
          20 min
        </p>
        <p>
          <strong>Year: </strong>
          2024
        </p>
        <p>
          <strong>Type: </strong>
          Pelicula
        </p>
        <p>
          <strong>Genres: </strong>
          Terror
        </p>
        <p>
          <strong>Rated: </strong>
          5/10
        </p>
        <p>
          <strong>Director: </strong>
          n/a
        </p>
        <p>
          <strong>Description: </strong>
          Primera pelicula
        </p>
      </div>
    </div>
  );
};

export default Details;
