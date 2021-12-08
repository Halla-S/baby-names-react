import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
const BabyNames = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState(props.data);
  const [addList, setAddList] = useState([]);
  function handleRemove(clickedItemId) {
    const newList = list.filter((item) => item.id !== clickedItemId);
    const myList = list.filter((item) => item.id === clickedItemId);
    setList(newList);
    setAddList(addList.concat(myList));
  }

  function handleRemoveFav(clickedItemId) {
    const removedFromFav = addList.filter((item) => item.id !== clickedItemId);
    const addedToOriginal = addList.filter((item) => item.id === clickedItemId);

    setList(
      list
        .concat(addedToOriginal)
        .sort((item1, item2) => item1.name.localeCompare(item2.name)));
    setAddList(removedFromFav);
  }
  return (
    <div>
      <Buttons
        data={props.data}
        SearchingGirls={(list) => setList(list)}
        SearchingBoys={(list) => setList(list)}
        SearchingAll={(list) => setList(list)}
      />
      <input
        type="text"
        placeholder="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <>
        <div className="myDiv Div">
          <h2>Favorite Names</h2>
          <ul>
            {addList
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
export default BabyNames;


