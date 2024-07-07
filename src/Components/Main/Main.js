import { useState, useEffect } from "react";
import store from "store";
import FoodFilter from "../Food_Filter/FoodFilter";
import Visualization from "../Visualication/Visualization";
import "./Main.css";

function Main({ saved, onClear }) {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    if (saved.list) {
      setFoodList(saved.list);
    }
  }, []);

  const handleFoodCheck = (obj) => {
    var updatedList = [...foodList];

    if (updatedList.some((cur) => cur.name === obj.name)) {
      updatedList = updatedList.filter((cur) => cur.name !== obj.name);
    } else {
      updatedList = [...foodList, obj];
    }

    setFoodList(updatedList);
  };

  const handleFoodClear = () => {
    setFoodList([]);
    onClear();
  };

  const handleSave = (oldName, newName) => {
    let obj = {
      name: newName,
      list: foodList,
    };
    let copy = store.get("saved");
    if (copy) {
      if (copy.some((cur) => cur.name === oldName)) {
        copy.map((cur, index) => {
          if (cur.name === oldName) copy[index] = obj;
        });
      } else {
        copy.push(obj);
      }
    } else {
      copy = [obj];
    }
    store.set("saved", copy);
  };

  return (
    <main className="main">
      <FoodFilter
        saved={saved.list}
        onChange={handleFoodCheck}
        onClear={handleFoodClear}
      />
      <Visualization
        list={foodList}
        savedName={saved.name ? saved.name : ""}
        onSave={handleSave}
        saved={false}
      />
    </main>
  );
}

export default Main;
