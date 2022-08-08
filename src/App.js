import Header from "./components/Header";
import Content from "./components/Content";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {

  const [searchedFood, setSearchedFood] = useState();

  return (
    <>
      <Header searchedFood={searchedFood} setSearchedFood={setSearchedFood} />
      <Content searchedFood={searchedFood} />
    </>
  );
}

export default App;
