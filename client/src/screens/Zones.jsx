import React from "react";
import ZoneMap from '../images/ZoneMap.png'

export default function Zones() {
//   const { zones } = props;
//   zones.map(zone => ({zone.zone}
// ))
  return (
    <div>
      <h3>U. S. Horticultural Hardiness Zones</h3>;
      <img src={ZoneMap} alt="Zones map" />
      <p>Select your Zone: </p>
    </div>)
}
