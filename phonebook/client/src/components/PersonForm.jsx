import React from "react";
import axiosClient from "../services/axiosClient";
// import NotificationError from "./NotificationError"

export default function PersonForm({
  handleName,
  handleNumber,
  newName,
  newNumber,
  persons,
  setNewName,
  setPersons,
  setNewNumber,
  setErrorMessage,
}) {
  const addPerson = (e) => {
    e.preventDefault();

    if (newName === "") {
      alert("Please enter a Name");
      return;
    } else if (newNumber === "") {
      alert("Please enter a phone number");
      return;
    }

    const findName = persons.find((person) => {
      return person.name === newName;
    });

    if (findName) {
      // console.log(findName);
      const confirmed = window.confirm(
        `${newName} is already added to phonebook, do you want to replace the old number with a new one?`
      );
      if (confirmed) {
        // console.log(findName._id);
        axiosClient
          .update(findName._id, { name: newName, number: newNumber })
          .then((returnedData) => {
            setPersons(returnedData);
            setErrorMessage(`${findName.name}'s phonenumber has been updated`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
          });
        setNewName("");
        setNewNumber("");
        return;
      } else if (!confirmed) {
        setNewName("");
        setNewNumber("");
        return;
      }
    }

    const personObj = {
      name: newName,
      number: newNumber,
    };

    axiosClient
      .create(personObj)
      .then((res) => {
        // console.log(res);
        setPersons([...persons, res]);
        setErrorMessage(`${res.name} is created`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
