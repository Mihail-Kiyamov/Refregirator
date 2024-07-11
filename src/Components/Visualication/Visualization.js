import { useEffect, useState, useRef } from "react";
import "./Visualization.css";
import DistributionFood from "./DistributionFood";

function Visualization({ list, savedName, saved, onSave }) {
  const [door, setDoor] = useState([]);
  const [firstShelf, setFirstShelf] = useState([]);
  const [secondShelf, setSecondShelf] = useState([]);
  const [thirdShelf, setThirdShelf] = useState([]);
  const [fruitsBox, setFruitsBox] = useState([]);
  const [vegteablesBox, setVegteablesBox] = useState([]);
  const [outside, setOutside] = useState([]);

  const [formValue, setFormValue] = useState({
    name: "",
  });

  const doorElement = useRef(null);
  const firstShelfElement = useRef(null);
  const secondShelfElement = useRef(null);
  const thirdShelfElement = useRef(null);
  const fruitsBoxElement = useRef(null);
  const vegteablesBoxElement = useRef(null);
  const outsideElement = useRef(null);

  useEffect(() => {
    let [
      door,
      firstShelf,
      secondShelf,
      thirdShelf,
      fruitsBox,
      vegteablesBox,
      outside,
    ] = DistributionFood(list);
    //[[], [], [], [], [], [], []];

    setDoor(door.list);
    setFirstShelf(firstShelf.list);
    setSecondShelf(secondShelf.list);
    setThirdShelf(thirdShelf.list);
    setFruitsBox(fruitsBox.list);
    setVegteablesBox(vegteablesBox.list);
    setOutside(outside.list);

    doorElement.current.style.setProperty("--row-count", door.rows);
    doorElement.current.style.setProperty("--column-count", door.columns);
    firstShelfElement.current.style.setProperty("--row-count", firstShelf.rows);
    firstShelfElement.current.style.setProperty(
      "--column-count",
      firstShelf.columns
    );
    secondShelfElement.current.style.setProperty(
      "--row-count",
      secondShelf.rows
    );
    secondShelfElement.current.style.setProperty(
      "--column-count",
      secondShelf.columns
    );
    thirdShelfElement.current.style.setProperty("--row-count", thirdShelf.rows);
    thirdShelfElement.current.style.setProperty(
      "--column-count",
      thirdShelf.columns
    );
    fruitsBoxElement.current.style.setProperty("--row-count", fruitsBox.rows);
    fruitsBoxElement.current.style.setProperty(
      "--column-count",
      fruitsBox.columns
    );
    vegteablesBoxElement.current.style.setProperty(
      "--row-count",
      vegteablesBox.rows
    );
    vegteablesBoxElement.current.style.setProperty(
      "--column-count",
      vegteablesBox.columns
    );
    outsideElement.current.style.setProperty("--row-count", outside.rows);
    outsideElement.current.style.setProperty("--column-count", outside.columns);
  }, [list]);

  const handleFoodSave = (event) => {
    event.preventDefault();

    onSave(savedName, formValue.name);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setFormValue({ name: value });
  };

  return (
    <div className="visualization">
      {!saved && (
        <div className="visualization__save">
          <form
            action=""
            method="post"
            className="visualization__save-form"
            onSubmit={handleFoodSave}
          >
            <input
              type="text"
              name="name"
              className="visualization__save-name"
              defaultValue={savedName}
              placeholder="Название"
              onChange={handleChange}
              required
            />
            <button type="submit" className="visualization__save-submit">
              Сохранить
            </button>
          </form>
        </div>
      )}
      <div className="visualization__main">
        <div className="visualization__refregirator">
          <div className="visualization__inside">
            <div
              className="visualization__firstShelf refregirator-place"
              ref={firstShelfElement}
            >
              {firstShelf.map((item, index) => {
                return (
                  <img
                    className="visualization__image"
                    key={index}
                    src={item.src}
                    alt={item.name}
                  />
                );
              })}
            </div>
            <div
              className="visualization__secondShelf refregirator-place"
              ref={secondShelfElement}
            >
              {secondShelf.map((item, index) => {
                return (
                  <img
                    className="visualization__image"
                    key={index}
                    src={item.src}
                    alt={item.name}
                  />
                );
              })}
            </div>
            <div
              className="visualization__thirdShelf refregirator-place"
              ref={thirdShelfElement}
            >
              {thirdShelf.map((item, index) => {
                return (
                  <img
                    className="visualization__image"
                    key={index}
                    src={item.src}
                    alt={item.name}
                  />
                );
              })}
            </div>
            <div className="visualization__boxes">
              <div
                className="visualization__fruitsBox refregirator-place"
                ref={fruitsBoxElement}
              >
                {fruitsBox.map((item, index) => {
                  return (
                    <img
                      className="visualization__image"
                      key={index}
                      src={item.src}
                      alt={item.name}
                    />
                  );
                })}
              </div>
              <div
                className="visualization__vegteablesBox refregirator-place"
                ref={vegteablesBoxElement}
              >
                {vegteablesBox.map((item, index) => {
                  return (
                    <img
                      className="visualization__image"
                      key={index}
                      src={item.src}
                      alt={item.name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className="visualization__door refregirator-place"
            ref={doorElement}
          >
            {door.map((item, index) => {
              return (
                <img
                  className="visualization__image"
                  key={index}
                  src={item.src}
                  alt={item.name}
                />
              );
            })}
          </div>
        </div>
        <div
          className="visualization__outside refregirator-place"
          ref={outsideElement}
        >
          {outside.map((item, index) => {
            return (
              <img
                className="visualization__image"
                key={index}
                src={item.src}
                alt={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Visualization;
