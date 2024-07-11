import store from "store";
import { useEffect, useState } from "react";
import "./Saved.css";
import Slider from "../Slider/Slider";

function Saved({ onChoose }) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    let storeSaved = store.get("saved");
    if (storeSaved) setSaved(storeSaved);
  }, []);

  const handleChoose = (index) => {
    onChoose(saved[index]);
  };
  return (
    <main className="saved">
      <Slider saved={saved} onChoose={handleChoose} />
    </main>
  );
}

export default Saved;
