import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Settings } from "../SettingsPage/Settings";
import { NewGameCard } from "../../components/NewGameCard/NewGameCard";
import languages from "../../utils/languages.json";
import "./Init.css";

export const Init = () => {
  const { selectedLanguage, handleChangeWindow } = useContext(MainContext);
  const [newGame, setNewGame] = useState(false);

  const lst_pttn =
    localStorage.getItem("last_partition") !== null &&
    localStorage.getItem("last_partition") !== undefined &&
    localStorage.getItem("last_partition") !== ""
      ? localStorage.getItem("last_partition")
      : null;
  const last_partition =
    lst_pttn !== null
      ? JSON.parse(localStorage.getItem("last_partition"))
      : null;

  return (
    <>
      <div id="init-main-container">
        <div className={`row ${newGame ? "d-none" : ""}`}>
          <div className="col-md-12 d-flex justify-content-center">
            <div id="init-game-title">
              <p className="glitch text-center">
                <span aria-hidden="true">Løgic Errør</span>
                Løgic Errør
                <span aria-hidden="true">Løgic Errør</span>
              </p>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
            <button
              className={`button-54 m-3 ${
                last_partition !== null ? "" : "btn disabled"
              }`}
              onClick={() => {
                let partition;
                for (let j = 1; j <= 3; j++) {
                  last_partition[j] ? (partition = j) : partition;
                }

                const progress = JSON.parse(localStorage.getItem("progress"));
                console.log(progress);

                alert(`Continuar en la partida ${partition}`);
              }}
            >
              {languages[selectedLanguage]["init-btns"].continue}
            </button>
            <button className="button-54 m-3" onClick={() => setNewGame(true)}>
              {languages[selectedLanguage]["init-btns"].newgame}
            </button>
            <button
              className="button-54 m-3"
              onClick={() => handleChangeWindow(<Settings />)}
            >
              {languages[selectedLanguage]["init-btns"].settings}
            </button>
          </div>
        </div>
        <div className={`row pt-5 ${newGame ? "" : "d-none"}`}>
          <div className="col-md-12 m-3">
            <ion-icon
              name="ios-arrow-back"
              id="init-back-btn"
              className="float-start"
              onClick={() => setNewGame(false)}
            ></ion-icon>
          </div>

          <NewGameCard save_partition={1} />
          <NewGameCard save_partition={2} />
          <NewGameCard save_partition={3} />
        </div>
      </div>
    </>
  );
};
