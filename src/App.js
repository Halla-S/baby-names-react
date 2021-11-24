import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
let babyNames = babyNamesData;
babyNames = babyNames.sort((item1, item2) =>item1.name.localeCompare(item2.name));
const BabyNames = (props) => {
  let [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <div className="myDiv">
        <ul>
          {props.data
            .filter((babyName) => {
              if (searchTerm === "") {
                return babyName;
              } else if (
                babyName.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return babyName;
              }else{
                return false;
              }
            })
            .map((item, index) => (
              <li key={index} className={item.sex === "f" ? "pink" : "blue"}>
                {item.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

function App() {
  return <BabyNames data={babyNames} />;
}

export default App;
