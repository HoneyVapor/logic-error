import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import "./App.css";

function App() {
  const { actualWindow } = useContext(MainContext);

  return <>{actualWindow}</>;
}

export default App;
