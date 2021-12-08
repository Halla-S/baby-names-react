import React,{ useState } from "react";
import "./App.css";

const Buttons = (props) => {
  const [clickedG, setClickedG] = useState(false);
  const [clickedB, setClickedB] = useState(false);
  const [clickedA, setClickedA] = useState(false);
  const clickedGirlsNames = () => {
    props.SearchingBoys(girlsNames);
    setClickedG(true);
    setClickedB(false);
    setClickedA(false);
  };
  const clickedBoysNames = () => {
    props.SearchingBoys(BoysNames);
    setClickedG(false);
    setClickedB(true);
    setClickedA(false);
  };
  const clickedAllNames = () => {
    props.SearchingBoys(All);
    setClickedG(false);
    setClickedB(false);
    setClickedA(true);
  };

  const girlsNames = props.data.filter((item) => item.sex === "f");
  const BoysNames = props.data.filter((item) => item.sex === "m");
  const All = props.data;
  console.log(props.data);
  return (
    <div className="buttonsContainer">
      <button
        className={clickedG ? "button g active" : "button g "}
        onClick={clickedGirlsNames}
      >
        Girls
      </button>
      <button
        className={clickedB ? "button b active" : "button b "}
        onClick={clickedBoysNames}
      >
        Boys
      </button>
      <button
        className={clickedA ? "button a active" : "button a"}
        onClick={clickedAllNames}
      >
        All
      </button>
    </div>
  );
};
export default Buttons;
