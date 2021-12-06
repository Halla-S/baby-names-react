import React, { useState } from "react";
import "./App.css";
import babyNamesData from "./babyNamesData.json";
let babyNames = babyNamesData;
babyNames = babyNames.sort((item1, item2) =>
  item1.name.localeCompare(item2.name));
const BabyNames = (props) => {
  let [searchTerm, setSearchTerm] = useState("");
  let [list, setList] = useState(props.data);
  let [addlist, setAddList] = useState([]);
  function handleRemove(clickedItemId) {
    const newList = list.filter((item) => item.id !== clickedItemId);
    const mylist = list.filter((item) => item.id === clickedItemId);
    setList(newList);
    addlist = addlist.concat(mylist);
    setAddList(addlist);
  }

  function handleRemoveFav(clickedItemId) {
    const removedFromFav = addlist.filter((item) => item.id !== clickedItemId);
    const addedToOriginal = addlist.filter((item) => item.id === clickedItemId);
    list = list.concat(addedToOriginal);
    list = list.sort((item1, item2) => item1.name.localeCompare(item2.name));
    setList(list);

    setAddList(removedFromFav);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <>
        <div className="myDiv Div">
          <h2>Favorite Namaes</h2>
          <ul>
            {addlist
              .filter((babyName) => {
                if (searchTerm === "") {
                  return babyName;
                } else if (
                  babyName.name
                    .toLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return babyName;
                } else {
                  return false;
                }
              })
              .map((item, index) => (
                <li
                  key={index}
                  className={item.sex === "f" ? "pink" : "blue"}
                  onClick={() => handleRemoveFav(item.id)}
                >
                  {item.name}
                </li>
              ))}
          </ul>
        </div>
      </>
      <div className="myDiv">
        <ul>
          {list
            .filter((babyName) => {
              if (searchTerm === "") {
                return babyName;
              } else if (
                babyName.name
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return babyName;
              } else {
                return false;
              }
            })
            .map((item, index) => (
              <li
                key={index}
                className={item.sex === "f" ? "pink" : "blue"}
                onClick={() => handleRemove(item.id)}
              >
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
