import { React, useState, useEffect } from "react";
import { getOnePlant } from "../services/plants";
import { useParams, Link } from "react-router-dom";
import { addZone } from "../services/zones";

export default function DetailPlant(props) {
  const [plantItem, setPlantItem] = useState(null);
  const [zoneID, setZoneID] = useState("");
  const { id } = useParams();
  // const { plants } = props;

  useEffect(() => {
    const fetchPlantItem = async () => {
      const plantData = await getOnePlant(id);
      setPlantItem(plantData);
    };
    fetchPlantItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const plantItem = await addZone({
      zone_id: zoneID,
      plant_id: id,
    });
    setPlantItem(plantItem);
  };

  //  - - - - "SELECT ZONE" drop-down: - - - -
  const handleChange = (e) => {
    const { value } = e.target;
    setZoneID(value);
  };
  //  - - - - - - - - - - - - - - - - - - -

  return (
    <div>
      <h2>{plantItem?.name}</h2>
      <img src={plantItem?.image_url} alt="plant pic" />
      <h3>
        {plantItem?.name} blooms in {plantItem?.bloom_time}
      </h3>
      <h3>
        {plantItem?.name} is a {plantItem?.plant_type}
      </h3>

      {plantItem?.zones.map((zone) => (
        <h3 key={zone.id}>
          {" "}
          {plantItem?.name} grows best in zone {zone.zone}
        </h3>
      ))}

      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          {/* we can set a default value to tell people to select a zone*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value="default">
            -- Select a zone --
          </option>
          {/* now we loop over all zones and return an <option> tag for each */}
          {props.zones.map((zone) => (
            // we track the zone's id as the "value" which will get added to state onChange
            // the zone's name goes between the open and close tag which is what the user sees
            <option value={zone.id} key={zone.id}>
              {zone.name}
            </option>
          ))}
        </select>
        <button>add</button>

        <br />
        <br />
        <Link to={`/plants/${plantItem?.id}/edit`}>
          <button>Edit this information</button>
        </Link>
      </form>
    </div>
  );
}
