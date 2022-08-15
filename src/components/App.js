import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then((data) => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleDelete(deletedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addingAToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysData={toys} handleDelete={handleDelete} />
    </>
  );
}

export default App;
