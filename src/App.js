import "./App.css";
import babyNamesData from "./babyNamesData.json";
let babyNames = babyNamesData;
babyNames = babyNames.sort((item1, item2) =>
  item1.name.localeCompare(item2.name));
const BabyNames = (props) => {
  return (
    <div className="myDiv">
      <ul>
        {props.data.map((item, index) => (
          <li key={index} className={item.sex === "f" ? "pink" : "blue"}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return <BabyNames data={babyNames} />;
}

export default App;
