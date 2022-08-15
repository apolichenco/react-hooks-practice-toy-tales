import React, {useState} from "react";

function ToyCard({toyInfo, handleDelete }) {
  const [likes, setLikes] = useState(toyInfo.likes)

function handleLikes() {
  setLikes(likes + 1)
  const newLikes = likes + 1
  fetch(`http://localhost:3001/toys/${toyInfo.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: newLikes
    }),
  })
  .then((r) => r.json())
  .then((updatedItem) => console.log("HI"));
}

function deleteFromSite() {
  fetch(`http://localhost:3001/toys/${toyInfo.id}`, {
    method: "DELETE",
  })
  .then((r) => r.json())
  .then(() => handleDelete(toyInfo));
}

  return (
    <div className="card">
      <h2>{toyInfo.name}</h2>
      <img
        src={toyInfo.image}
        alt={toyInfo.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikes}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteFromSite} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
