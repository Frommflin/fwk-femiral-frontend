import React from "react";
import styles from "./game.module.css";
import { GameBoard2 } from "femiral-components-lib";
import { ButtonRow } from "femiral-components-lib";
import { FiveInRowContainer } from "femiral-components-lib";

const Game = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Game Page</h1>
        <div className={styles.text}>
          <FiveInRowContainer
            numberOfButtons={10}
            size={10}
            onClick={() => {}}
            coloredCells={[]}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
