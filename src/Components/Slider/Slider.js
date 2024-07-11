import "./Slider.css";
import arrow from "../../images/down_arrow_asxr2vdmtfwz.svg";
import Visualization from "../Visualication/Visualization";
import { useEffect, useRef, useState } from "react";

function Slider({ saved, onChoose }) {
  const maxIndex = saved.length - 1;
  const [index, setIndex] = useState(0);
  const sliderList = useRef(null);

  const handleChoose = (event) => {
    onChoose(event.target.getAttribute("index"));
  };

  const nandleMove = (direction) => {
    let newIndex = index + direction;
    console.log(index + direction);
    if (newIndex < 0) newIndex = maxIndex;
    if (newIndex > maxIndex) newIndex = 0;
    setIndex(newIndex);
  };

  useEffect(() => {
    sliderList.current.style.setProperty("--x-translate", -index);
  }, [index]);

  return (
    <div className="slider">
      <button
        className="slider__button slider__button_direction_left"
        onClick={() => nandleMove(-1)}
      >
        <img src={arrow} alt="Cтрелка" className="slider__arrow-img" />
      </button>
      <div className="slider__container">
        <div className="slider__list" ref={sliderList}>
          {saved.map((item, index) => {
            return (
              <div key={index} className="slider__item-container">
                <h2 className="slider__name">{item.name}</h2>
                <button
                  className="slider__choose-button"
                  index={index}
                  onClick={handleChoose}
                >
                  Выбрать
                </button>
                <Visualization list={item.list} saved={true} />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="slider__button slider__button_direction_right"
        onClick={() => nandleMove(1)}
      >
        <img src={arrow} alt="Cтрелка" className="slider__arrow-img" />
      </button>
    </div>
  );
}

export default Slider;
