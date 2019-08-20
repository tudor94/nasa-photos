import React from "react";

const Photo = props => (
  <div className="container">
    <h3 className="photoTitle">{props.photo.title}</h3>
    <img className="photo" src={props.photo.url} alt={props.photo.title} />
  </div>
);

export default Photo;
