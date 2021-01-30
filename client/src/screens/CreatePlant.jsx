import { React, useState } from "react";

export default function CreatePlant(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState, [name]: value,
    }));
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData);
    }}>
      <h3>Add a Plant, Bush or Tree to the list:</h3>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <br/>
      <button>Submit</button>
    </form>);
}
