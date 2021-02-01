import { React, useState } from "react";

export default function CreatePlant(props) {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    plant_type: "",
    bloom_time: ""
  });
  const { name, image_url, plant_type, bloom_time } = formData;
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
      <label> <br />
        Name of Plant:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label> <br /> <br />
      <label>
        Image:
        <input type="text" name="image_url" value={image_url} placeholder="add image url here" onChange={handleChange} />
      </label> <br /> <br />
      <label>
        Plant type:
        <input type="text" name="plant_type" value={plant_type} placeholder="flower, bush or tree" onChange={handleChange} />
      </label> <br /> <br />
      <label>
        Bloom time:
        <input type="text" name="bloom_time" value={bloom_time} onChange={handleChange} />
      </label>
      <br /> <br /> <br />
      <button>Submit</button>
    </form>
  );
}

// https://www.lucasgreenhouses.com/_ccLib/image/plants/DETA-3541.jpg