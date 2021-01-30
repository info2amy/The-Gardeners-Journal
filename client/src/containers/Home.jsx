import { React, useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import Zones from "../screens/Zones";
import { getAllZones } from "../services/zones";
import Plants from "../screens/Plants";
import { getAllPlants } from "../services/plants";

export default function Home(props) {
  const [zones, setZones] = useState([]);
  const [plants, setPlants] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchZones = async () => {
      const zoneData = await getAllZones();
      setZones(zoneData);
    };
    fetchZones();
  }, []);

  useEffect(() => {
    const fetchPlants = async () => {
      const plantData = await getAllPlants();
      setPlants(plantData);
    };
    fetchPlants();
  }, []);

  return (
    <Switch>
      <Route path="/zones">
        <Zones zones={zones} />
      </Route>
      <Route path="/plants">
        <Plants
          plants={plants}
          // handleDelete={handleDelete}
          currentUser={currentUser}
        />
      </Route>
    </Switch>
  );
}
