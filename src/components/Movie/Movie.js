import React from "react";
import "./Movie.css";

export default function Movie(props) {
  return (
    <div className="movie">
      <h5>{props.title}</h5>
      <p>{props.id}</p>
      <img src={props.img} className="movie__img"></img>
    </div>
  );
}
