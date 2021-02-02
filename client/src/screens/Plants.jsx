import React from "react";
import { Link } from "react-router-dom";
import "./Plants.css";

export default function Plants(props) {
  const { plants, currentUser, handleDelete } = props;
  return (
    <div>
      <h3>Plants, Bushes, Trees</h3>
      <h4>Click on a plant for detailed information.</h4>

      <Link to="/plants/new">
        <button>Add a new plant, bush or tree</button>
      </Link> <br/> <br/>

      {plants.map((plant) => (
        <React.Fragment key={plant.id}>
          <Link to={`/plants/${plant.id}`}>
            <img className="allImages" src={plant.image_url} alt="plantimage"/>
            <p>{plant.name}</p>
          </Link>
            <p>{plant.name} blooms in {plant.bloom_time}</p>
          {currentUser?.id  && (
            <>
              {/* <Link to={`/plants/${plant.id}/edit`}>
                <button>Edit this information</button>
              </Link> */}
              <br/>
            </> 
          )}
          <br/> <br/>
        </React.Fragment>
      ))}
      <br />
      <br/>
      {/* <Link to="/plants/new">
        <button>Add a new plant, bush or tree</button>
      </Link> */}
    </div>
  );
}

