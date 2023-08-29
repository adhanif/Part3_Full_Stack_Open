import React from "react";
import axiosClient from "../services/axiosClient";

export default function Persons({
  keyWord,
  persons,
  setPersons,
  setErrorMessage,
}) {
  const personsToShow = !keyWord
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(`${keyWord.toLowerCase()}`)
      );

  const handleDelete = (e, person) => {
    const confirmed = window.confirm("Do you really want to delete?");
    if (confirmed) {
      axiosClient
        .Delete(person.id)
        .then((returnedData) => {
          setPersons(returnedData);
          setErrorMessage(`${person.name} is  deleted`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      {personsToShow &&
        Array.isArray(personsToShow) &&
        personsToShow.map((person) => {
          return (
            <div style={{ display: "flex" }} key={person.id}>
              <p style={{ margin: "0px" }}>
                {person.name} {person.number}
              </p>
              <button onClick={(e) => handleDelete(e, person)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
