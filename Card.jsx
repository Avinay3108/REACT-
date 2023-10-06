import React from "react";
import Avatar from "./Avatar";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <Avatar img={props.img} />
        <h2 className="name">{props.name}</h2>
      </div>
    </div>
  );
}
export default Card