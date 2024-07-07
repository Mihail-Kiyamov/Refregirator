import store from "store";
import { useEffect, useState } from "react";
import Visualization from "../Visualication/Visualization";
import "./Saved.css";

function Saved({ onChoose }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    let storeSaved = store.get("saved");
    if (storeSaved) setSaved(storeSaved);
  }, []);

  const handleChoose = (event) => {
    onChoose(saved[event.target.getAttribute("index")]);
  };
  return (
    <main className="saved">
      {saved.map((item, index) => {
        return (
          <div key={index} className="saved__container">
            <h2 className="saved__name">{item.name}</h2>
            <button
              className="saved__choose-button"
              index={index}
              onClick={handleChoose}
            >
              Выбрать
            </button>
            <Visualization list={item.list} saved={true} />
          </div>
        );
      })}
    </main>
  );
}

export default Saved;
