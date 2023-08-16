import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { Init } from "../Init/Init";
import "./Settings.css";

export const Settings = () => {
  const { handleChangeWindow } = useContext(MainContext);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div id="settings-main-container">
        <div className="row-fluid">
          <div className="col-md-12">
            <ion-icon
              name="ios-arrow-back"
              className="float-start"
              id="settings-back-icon"
              onClick={() => handleChangeWindow(<Init />)}
            ></ion-icon>
          </div>
          <ul className="nav nav-tabs nav-justified settings-tabs-lines">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 0 ? "settings-tabs active" : ""
                }`}
                onClick={() => setActiveTab(0)}
              >
                Active
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 1 ? "settings-tabs active" : ""
                }`}
                onClick={() => setActiveTab(1)}
              >
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === 2 ? "settings-tabs active" : ""
                }`}
                onClick={() => setActiveTab(2)}
              >
                Dropdown
              </a>
            </li>
          </ul>

          <div className="col-md-12 d-flex justify-content-center">
            <div className="tab-content">
              <div
                className={`tab-pane fade ${
                  activeTab === 0 ? "show active" : ""
                }`}
              >
                ALGO DE CONTENIDO AQUI
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 1 ? "show active" : ""
                }`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus culpa ex mollitia quae sint veniam expedita, quas
                eveniet perspiciatis excepturi ipsum autem necessitatibus
                repudiandae eos, a, harum quod voluptate dolorem perferendis
                tempora unde minima delectus! Consequuntur totam, non dolorem
                laborum architecto quae esse distinctio! Dolorem quaerat
                laudantium, quos fuga sunt ullam voluptatibus. Tempora ullam quo
                consequatur rem corporis, non culpa distinctio velit. Ratione
                voluptatum laboriosam eligendi sequi, obcaecati aperiam corporis
                nobis excepturi perferendis pariatur reiciendis corrupti
                aspernatur illum fugiat totam repudiandae, quidem quos ipsam
                dolore quo asperiores autem ad voluptates? Eaque impedit eos,
                reprehenderit excepturi tempore maxime quis perspiciatis?
                Deleniti.
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 2 ? "show active" : ""
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                eveniet aspernatur sequi ducimus facilis quasi maiores, expedita
                consectetur nulla ipsam cumque laboriosam incidunt fugit odit at
                molestiae possimus esse sed.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
