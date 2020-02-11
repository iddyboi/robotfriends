import React from "react";

export default function Card({ id, username, email }) {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
