import { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import "./NewGameCard.css";

export const NewGameCard = ({ save_partition }) => {
  const { createNewGamePartition, lastPartitionSelected, setLastPartition } =
    useContext(MainContext);

  const p = localStorage.getItem("progress");
  const progress =
    p !== null && p !== undefined && p !== "" ? JSON.parse(p) : undefined;
  const progress_status =
    progress !== undefined ? progress[save_partition].chapter : undefined;

  const handleChangeLastPartitionSelected = () => {
    setLastPartition(save_partition); //* Se actualiza globalmente (context)

    const last_selected = {
      1: false,
      2: false,
      3: false,
    };

    last_selected[save_partition] = true;

    const last_partition = JSON.stringify(last_selected);

    localStorage.setItem("last_partition", last_partition); //* Se guarda en los datos almacenados
  };
  return (
    <>
      <div className="col-md-4 mt-5">
        <div
          className="new-game-card"
          onClick={() => {
            progress_status === undefined
              ? createNewGamePartition(save_partition)
              : handleChangeLastPartitionSelected();
          }}
        >
          {progress_status !== undefined ? (
            <>
              <h1 className="new-game-card-title">
                {" "}
                Cap. {progress[save_partition].chapter.id}:{" "}
                {progress[save_partition].chapter.nameof}{" "}
              </h1>
              <span className="new-game-card-desc">
                {" "}
                Progeso:{" "}
                {Math.floor((100 / 3) * progress[save_partition].chapter.part)}%
              </span>

              <div className="progress">
                <div
                  className={`progress-bar bg-success`}
                  style={{
                    width: `${Math.floor(
                      (100 / 3) * progress[save_partition].chapter.part
                    )}%`,
                  }}
                  role="progressbar"
                  aria-valuenow={Math.floor(
                    (100 / 3) * progress[save_partition].chapter.part
                  )}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <span
                    className={`float-end circle ${
                      lastPartitionSelected === save_partition
                        ? "d-flex"
                        : "d-none"
                    }`}
                  ></span>
                </div>
              </div>
            </>
          ) : (
            <p>Partida nueva</p>
          )}
        </div>
      </div>
    </>
  );
};
