import React from "react";
import { Link } from "react-router-dom";

export default function Plants(props) {
  const { plants, currentUser, handleDelete } = props;
  return (
    <div>
      <h3>Plants</h3>
      {plants.map((plant) => (
        <React.Fragment key={plant.id}>
          <Link to={`/plants/${plant.id}`}>
            <p>{plant.name}</p>
          </Link>
          {currentUser?.id === plant.user_id && (
            <>
              <Link to={`/plants/${plant.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() =>
                handleDelete(plant.id)}>Delete</button>
            </>
          )}
        </React.Fragment>
      ))}
      <br />
      <br/>
      <Link to="/plants/new">
        <button>Create a plant, bush or tree</button>
      </Link>
    </div>
  );
}
