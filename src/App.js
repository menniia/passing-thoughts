import React, { useState } from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";
import { generateId, getNewExpirationTime } from "./utils/utils.js";
import AddThoughtsForm from "./components/AddThoughtsForm";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThoughts = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThoughts = (thoughtIdToRemove) => {
    setThoughts(thoughts.filter((thought) => thought.id !== thoughtIdToRemove));
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtsForm addThoughts={addThoughts} />
        <ul className="thoughts">
          {thoughts.map(thought => (
            <Thoughts key={thought.id} thoughts={thought} removeThoughts={removeThoughts} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
