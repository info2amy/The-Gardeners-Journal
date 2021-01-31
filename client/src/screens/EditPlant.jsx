import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditPlant(props) {
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;
  const { plants, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const plantItem = plants.find((plantItem) => {
        return plantItem.id === Number(id);
      });
      setFormData({
        name: plantItem.name,
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
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
    </form>
  );
}
