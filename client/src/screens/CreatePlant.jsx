import { React, useState } from "react";

export default function CreatePlant(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    plant_type: ""
  });
  const { name, image_url, plant_type } = formData;
  const { handleCreate } = props;

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
        handleCreate(formData);
      }}
    >
      <h3>Add a Plant, Bush or Tree to the list:</h3>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="text" name="image_url" value={image_url} onChange={handleChange} />
      </label>
      <label>
        Plant type:
        <input type="text" name="plant_type" value={plant_type} onChange={handleChange} />
      </label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
