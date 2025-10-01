import React from "react";
import styles from "./home.module.css";
import { InfoBox } from "femiral-components-lib";

const Home = () => {
  const styleOverride = {
    width: "70%",
    height: "450px",
    margin: "20px auto",
    backgroundColor: "#e0e0e0",
  };

  return (
    <InfoBox styling={styleOverride}>
      <h1> Välkommen till Fyra i Rad</h1>
      <div className={styles.flex}>
        <div>
          <h3>Vad?</h3>
          <p>
            Du har hittat till en online version av den gammla klassikern 4 i
            rad. Ett spel där två spelare tävlar om att få 4 poletter av sin
            färg i rad först.
          </p>
          <p>
            Spelet här är tänkt att funka som det verkliga spelet, kolumnbaserat
            där man väljer vilken kolumn man lägger poletten i och tänker
            strategiskt för att få sina poletter i rad horisintellt, vertikalt
            eller diagonalt genom att bygga poletterna bredvid och ovanpå sina
            egna och sin motspelares.
          </p>
        </div>
        <div>
          <h3>Regler</h3>
          <ul>
            <li>Du får bara lägga 1 polett åt gången</li>
            <li>Du får inte ångra ditt drag efter att du laggt din polett</li>
            <li>
              Vinnande rad kan fås horisontellt (_), vertikalt (|) eller
              diagonalt(/ \)
            </li>
            <li>Först till 4 i rad vinner spelet!!</li>
          </ul>
        </div>
      </div>
    </InfoBox>
  );
};

export default Home;
