import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysData, handleDelete}) {
  return (
    <div id="toy-collection">{
        toysData.map((toy, index) => 
        <ToyCard key={index} toyInfo={toy} handleDelete={handleDelete} />
        )
      }</div>
  );
}

export default ToyContainer;
