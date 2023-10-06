import React from "react";
import Card from "./Card";
import contacts from "./Contact"
function A() {
  return (
    <div className="card-container">
      <div className="container">
        <div className="row">
          <Card

            img={contacts[0].imgURL}
            name={contacts[0].name}
          />
          <Card
            img={contacts[1].imgURL}
            name={contacts[1].name}
          />
          <Card
            img={contacts[2].imgURL}
            name={contacts[2].name}
          />
          <Card
            img={contacts[3].imgURL}
            name={contacts[3].name}
          />
          <Card
            img={contacts[4].imgURL}
            name={contacts[4].name}
          />
          <Card
            img={contacts[5].imgURL}
            name={contacts[5].name}
          />
        </div>
      </div>
    </div>
  );
}
export default A;