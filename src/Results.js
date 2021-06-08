import React from "react";
import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No pets found!</h2>
      ) : (
        pets.map(function (pet) {
          return (
            <Pet
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
}

export default Results;
