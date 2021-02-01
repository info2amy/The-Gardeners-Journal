import { React, useState, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import Zones from "../screens/Zones";
import { getAllZones } from "../services/zones";
import Plants from "../screens/Plants";
import {
  getAllPlants,
  postPlant,
  deletePlant,
  editPlant,
} from "../services/plants";
import CreatePlant from "../screens/CreatePlant";
import DetailPlant from "../screens/DetailPlant";
import EditPlant from "../screens/EditPlant";

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

  const handleCreate = async (plantData) => {
    const newPlant = await postPlant(plantData);
    setPlants((prevState) => [...prevState, newPlant]);
    history.push("/plants");
  };

  const handleDelete = async (id) => {
    await deletePlant(id);
    history.push("/plants")
    setPlants((prevState) =>
      prevState.filter((plantItem) => {
        return plantItem.id !== Number(id);
      })
    );
  };

  const handleUpdate = async (id, plantData) => {
    const updatedPlant = await editPlant(id, plantData);
    setPlants((prevState) =>
    prevState.map((plantItem) => {
      return plantItem.id === Number(id) ? updatedPlant : plantItem;
    }))
    history.push("/plants")
  };

  return (
    <Switch>
      <Route path="/plants/new">
        <CreatePlant handleCreate={handleCreate} />
      </Route>
      <Route path="/plants/:id/edit">
        <EditPlant plants={plants} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      </Route>
      <Route path="/plants/:id">
        <DetailPlant zones={zones} />
      </Route>
      <Route path="/plants">
        <Plants
          plants={plants}
          handleDelete={handleDelete}
          currentUser={currentUser} />
      </Route>
      <Route path="/zones">
        <Zones zones={zones} />
      </Route>
    </Switch>
  );
}
