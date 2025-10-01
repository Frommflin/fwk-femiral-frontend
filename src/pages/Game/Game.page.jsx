import React from "react";
import styles from "./game.module.css";
import { GameBoard2 } from "femiral-components-lib";
import { ButtonRow } from "femiral-components-lib";
import { FiveInRowContainer } from "femiral-components-lib";

const Game = () => {
  return (
    <>
      <div className={styles.gameContainer}>
        <FiveInRowContainer
          numberOfButtons={10}
          size={10}
          onClick={() => {}}
          coloredCells={[]}
          classNameGameSquare={styles.gameSquare}
        />
      </div>
    </>
  );
};

export default Game;
