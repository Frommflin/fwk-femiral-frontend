import React from "react";
import styles from "./game.module.css";

const Game = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Game Page</h1>
        <div className={styles.text}>
          This is the page where the game is played.
        </div>
      </div>
    </>
  );
};

export default Game;
