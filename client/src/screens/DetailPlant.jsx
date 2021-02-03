import { useState, useEffect } from "react";
import { getOnePlant } from "../services/plants";
import { useParams, Link } from "react-router-dom";
import { addZone } from "../services/zones";
import './DetailPlant.css'

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

  return (
    <section className='detailSection'>
      <contianer className="namePicContainer">
        {console.log(plantItem)}
        <h1>{plantItem?.name}</h1>
        <img src={plantItem?.image_url} alt="plant pic" />
      </contianer>
      <container className="infoContainer">
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
          <br />
          <br />
          <Link to={`/plants/${plantItem?.id}/edit`}>
            <button>Edit this information</button>
          </Link>
        </form>
      </container>
    </section>
  );
}
