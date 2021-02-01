import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditPlant(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    plant_type: ""
  });
  const { name, image_url, plant_type } = formData;
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
      });
    };
    if (plants.length) {
      prefillFormData();
    }
  }, [plants]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(id, formData);
      }}
    >
      <h3>Edit Plant information:</h3>
      <label>
        Update Plant Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Update Plant Image:
        <input type="text" name="image_url" placeholder="enter image url" value={image_url} onChange={handleChange} />
      </label>
      <br />
      <br/>
      <button>Submit Changes</button>
      <br />
      <br />
      <button onClick={(e) => {
        e.preventDefault();
        handleDelete(id)}}>Delete This Plant</button>
      
    </form>
  );
}
// https://ca.slack-edge.com/T0351JZQ0-U01CSG27BSP-090a0a05bba2-512