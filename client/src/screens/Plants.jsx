import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Plants.css";

export default function Plants(props) {
  const { plants, currentUser, zones } = props;
  const [zoneID, setZoneID] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setZoneID(value);
  };
  
  const filteredPlantsByZone = plants.filter((plant) => {
    if (zoneID.length) {
      const zoneIDsArr = plant.zones.map((zone) => {
        return zone.id;
      });
      return zoneIDsArr.includes(Number(zoneID));
    }
    return true;
  });
  return (
    <div>
      <h1>Plants, Bushes, Trees</h1>
      <h4>Click on a plant for detailed information.</h4>
      <Link to="/plants/new">
        <button>Add a new plant, bush or tree</button>
      </Link>
      <br /> <br />
      <select defaultValue="zone" onChange={handleChange}>
        <option value="">- Select a zone -</option>
        {console.log(zones)};
        {zones.map((zone) => (
          <option value={zone.id} key={zone.id}>
            {zone.zone}
          </option>
        ))}
      </select>
      <button>filter plants by zone</button>
      <br /> <br />
      <section className="plant-container">
        {filteredPlantsByZone.map((plant) => (
          <React.Fragment key={plant.id}>
            <Link to={`/plants/${plant.id}`}>
              <img
                className="all-images"
                src={plant.image_url}
                alt="plantimage"
              />
              <p>{plant.name}</p>
            </Link>
            {currentUser?.id && (
              <>
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}
