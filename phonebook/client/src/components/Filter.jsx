import React from "react";

export default function Filter({ handlekeyWord, keyWord }) {
  return (
    <div>
      <div>
        filter by Name keyword:{" "}
        <input value={keyWord} onChange={handlekeyWord} />
      </div>
    </div>
  );
}
