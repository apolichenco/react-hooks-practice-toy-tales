import React, {useState} from "react";

function ToyForm({addingAToy}) {
  const [name, setName] = useState()
  const [image, setImage] = useState()

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newToy = {
      name: name,
      image: image,
      likes: 0
    }
    fetch('http://localhost:3001/toys', {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
    .then((r) => r.json())
    .then((newItem) => addingAToy(newItem));
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={name}
        />
        <br />
        <input
          onChange={handleImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
