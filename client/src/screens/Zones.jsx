import React from "react";

export default function Zones() {
  const { zones } = props;
  return (
    <div>
      <h3>U. S. Horticultural Hardiness Zones</h3>;
      <img src="./images/ZoneMap.png" alt="Zones map" />
      <p>Select your Zone: </p>
    </div>);
}
