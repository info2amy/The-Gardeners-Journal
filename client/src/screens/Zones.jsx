import React from "react";
import ZoneMap from '../images/ZoneMap.png'
import "./Zones.css"

export default function Zones() {
//   const { zones } = props;
//   zones.map(zone => ({zone.zone}
// ))
  return (
    <div>
      <h2>U. S. Horticultural Hardiness Zones</h2>
      <img className="zoneMap" src={ZoneMap} alt="Zones map" />
      {/* <p>Select your Zone: </p> */}
    </div>)
}
