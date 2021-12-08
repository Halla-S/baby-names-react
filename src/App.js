
import BabyNames from "./BabyNames";
import babyNamesData from "./babyNamesData.json";
import "./App.css";
let babyNames = babyNamesData;
babyNames = babyNames.sort((item1, item2) =>
  item1.name.localeCompare(item2.name));
function App() {
  return (
    <>
      <BabyNames data={babyNames} />
    </>
  );
}

export default App;
