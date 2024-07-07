import { useState, useEffect } from "react";
import "./FoodFilter.css";
import allFoodList from "./AllFoodList.js";
import crossIcon from "../../images/vectorpaint.svg";

function FoodFilter({ saved, onChange, onClear }) {
  const [currentCategory, setCurrentCategory] = useState([]);
  const [checked, setChecked] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    if (saved) {
      let arr = [];
      saved.forEach((item) => {
        arr.push(item.name);
      });
      setChecked(arr);
    }
  }, []);
  useEffect(() => {
    if (currentCategory.length > 0) {
      setIsCategoryOpen(true);
    } else {
      setIsCategoryOpen(false);
    }
  }, [currentCategory]);
  const handleCategorySet = (event) => {
    setCurrentCategory(allFoodList[event.target.getAttribute("index")].list);
    setIsCategoryOpen(true);
  };
  const handleCategoryClose = () => {
    setIsCategoryOpen(false);
  };
  const nandleFoodCheck = (event) => {
    let obj = currentCategory[event.target.getAttribute("index")];
    onChange(obj);

    var updatedList = [...checked];
    if (checked.indexOf(event.target.htmlFor) !== -1) {
      updatedList.splice(checked.indexOf(event.target.htmlFor), 1);
    } else {
      updatedList = [...checked, event.target.htmlFor];
    }
    setChecked(updatedList);
  };
  const handleFoodClear = () => {
    setChecked([]);
    onClear();
  };

  return (
    <div className="food-filter">
      <div className="food-filter__category-list">
        {allFoodList.map((item, index) => (
          <button
            className="food-filter__name"
            value={item.categoryName}
            key={index}
            index={index}
            onClick={handleCategorySet}
          >
            {item.categoryNameRU}
          </button>
        ))}
        <button className="food-filter__clear-food" onClick={handleFoodClear}>
          Очистить
        </button>
      </div>
      <div className={`food-filter__food-list ${isCategoryOpen ? "show" : ""}`}>
        <img
          src={crossIcon}
          className="food-filter__cross-button"
          alt="cross"
          onClick={handleCategoryClose}
        />
        {currentCategory.map((item, index) => (
          <div key={index} className="food-filter__checkbox-wrapper">
            <input
              type="checkbox"
              checked={checked.includes(item.name)}
              className="food-filter__food-checkbox"
              name={item.name}
              onChange={nandleFoodCheck}
            />
            <label
              className="food-filter-label"
              htmlFor={item.name}
              index={index}
              onClick={nandleFoodCheck}
            >
              {item.nameRU}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodFilter;
