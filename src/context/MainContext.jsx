import { createContext, useState } from "react";
import { Init } from "../pages/Init/Init";

export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const [actualWindow, setActualWindow] = useState(<Init />);
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  const last_parttn =
    localStorage.getItem("last_partition") !== undefined &&
    localStorage.getItem("last_partition") !== null &&
    localStorage.getItem("last_partition") !== ""
      ? localStorage.getItem("last_partition")
      : null;
  const last_partition = JSON.parse(last_parttn);
  let last_selected;
  for (let i = 1; i <= 3; i++) {
    last_partition[i] ? (last_selected = i) : last_selected;
  }

  const [lastPartitionSelected, setLastPartitionSelected] =
    useState(last_selected);

  const handleChangeWindow = (window) => {
    setActualWindow(window);
  };

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
  };

  const createNewGamePartition = (identifier) => {
    //? https://www.youtube.com/watch?v=F6j_V6FUYTI
    const data = {
      //? Player
      player: {
        nameof: "Alice", //! (readonly)
        life: 100,
      },
      smily2: {
        nameof: "Robot",
        life: 100,
      },
      companions: {
        sophia: {
          nameof: "Sophia",
          life: 100,
        },
        alex: {
          nameof: "Alex",
          life: 100,
        },
      },

      //? History
      chapter: {
        id: 1,
        nameof: "Amargo Comienzo",
        part: 0, //? Cada capitulo se separa en 3 partes
      },
    }; //! Poner estructura de DB aqui (usar localstorage)

    const prev_progress = localStorage.getItem("progress");

    const gameStatus = {
      1:
        prev_progress !== undefined && prev_progress !== null
          ? JSON.parse(localStorage.getItem("progress"))[1]
          : {},
      2:
        prev_progress !== undefined && prev_progress !== null
          ? JSON.parse(localStorage.getItem("progress"))[2]
          : {},
      3:
        prev_progress !== undefined && prev_progress !== null
          ? JSON.parse(localStorage.getItem("progress"))[3]
          : {},
    };

    gameStatus[identifier] = data;

    const progress = JSON.stringify(gameStatus);
    localStorage.setItem("progress", progress);
  };

  const setLastPartition = (last_partition) => {
    setLastPartitionSelected(last_partition);
  };

  return (
    <>
      <MainContext.Provider
        value={{
          actualWindow,
          handleChangeWindow,
          selectedLanguage,
          handleChangeLanguage,

          createNewGamePartition,
          lastPartitionSelected,
          setLastPartition,
        }}
      >
        {props.children}
      </MainContext.Provider>
    </>
  );
};
