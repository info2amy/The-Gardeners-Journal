import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditPlant.css";

export default function EditPlant(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    plant_type: "",
    bloom_time: "",
  });
  const { name, image_url, plant_type, bloom_time } = formData;
  const { plants, handleUpdate, handleDelete } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const plantItem = plants.find((plantItem) => {
        return plantItem.id === Number(id);
      });
      setFormData({
        name: plantItem.name,
        image_url: plantItem.image_url,
        plant_type: plantItem.plant_type,
        bloom_time: plantItem.bloom_time,
      });
    };
    if (plants.length) {
      prefillFormData();
    }
  }, [plants, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h3>Edit Plant information:</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}>
        <section className="editForm">
        <container className="editPic">
          <img src={image_url} alt="plant's pic" />
        </container>
        <container className="editFields">
          <label>
            Update Plant Name:
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>{" "}
          <br /> <br />
          <label>
            Update Plant Image:
            <br />
            <input
              type="text"
              name="image_url"
              placeholder="enter image url"
              value={image_url}
              onChange={handleChange}
            />
          </label>{" "}
          <br /> <br />
          <label>
            Update Plant type:
            <br />
            <input
              type="text"
              name="plant_type"
              placeholder="flower, bush or tree"
              value={plant_type}
              onChange={handleChange}
            />
          </label>{" "}
          <br /> <br />
          <label>
            Update Bloom time:
            <br />
            <input
              type="text"
              name="bloom_time"
              value={bloom_time}
              onChange={handleChange}
            />
          </label>
          <br /> <br /> <br />
          <button>Submit Changes</button>
          <br /> <br />
          <button
            className="deletebtn"
            onClick={(e) => {
              e.preventDefault();
              handleDelete(id);
            }}>
            Delete This Plant
          </button>
        </container>
      </section>
      </form>
      </div>
  );
}
