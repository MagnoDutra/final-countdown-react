import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submited, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submited ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" value={enteredPlayerName} onChange={handleChange} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
