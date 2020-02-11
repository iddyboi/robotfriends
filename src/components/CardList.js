import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            username={robot.username}
            email={robot.email}
          ></Card>
        );
      })}
    </div>
  );
}
