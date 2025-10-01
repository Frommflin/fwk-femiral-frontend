import React from "react";
import styles from "./game.module.css";
import { GameBoard2 } from "femiral-components-lib";

const Game = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Game Page</h1>
        <div className={styles.text}>
          <GameBoard2
            size={7}
            coloredCells={[{ row: 6, col: 1, color: "red" }]}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
