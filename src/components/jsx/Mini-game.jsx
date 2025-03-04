import React, { useEffect, useState } from "react";
import "../css/mini-game.css";

function MiniGame() {
  const [currentNote, setCurrentNote] = useState(null);

  const notes = {
    a: new Audio("/sounds/note1.mp3"),
    s: new Audio("/sounds/note2.mp3"),
    d: new Audio("/sounds/note3.mp3"),
    f: new Audio("/sounds/note4.mp3"),
    g: new Audio("/sounds/note5.mp3"),
    h: new Audio("/sounds/note6.mp3"),
    j: new Audio("/sounds/note7.mp3"),
    k: new Audio("/sounds/note8.mp3"),
  };

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (notes[key]) {
      setCurrentNote(key);
      notes[key].currentTime = 0; 
      notes[key].play();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mini-game-container">
      <h1 className="game-title">Deku Link Saxophone Mini-Game</h1>
      <p className="instructions">Press keys A, S, D, F, G, H, J, K to play notes!</p>
      <div className="piano-keys">
        {Object.keys(notes).map((key) => (
          <div 
            key={key} 
            className={`key ${currentNote === key ? 'active' : ''}`}
          >
            {key.toUpperCase()}
          </div>
        ))}
      </div>
      {currentNote && (
        <div className="note-display">
          Playing: {currentNote.toUpperCase()}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  saxophone: {
    marginTop: "20px",
    fontSize: "24px",
  },
  noteDisplay: {
    marginTop: "10px",
    color: "green",
  },
};

export default MiniGame;