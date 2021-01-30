import { React, useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import Zones from "../screens/Zones";
import { getAllZones } from "../services/zones";

export default function Home(props) {
  const [zones, setZones] = useState([]);
  // const [plants, setPlants] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchZones = async () => {
      const zoneData = await getAllZones();
      setZones(zoneData);
    };
    fetchZones();
  }, []);

  return (
    <Switch>
      <Route path="/zones">
        <Zones zones={zones} />
      </Route>
    </Switch>
  );
}
