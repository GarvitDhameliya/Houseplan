import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { GET_CATEGORY_PROGRESS } from "./redux-saga/category/action/action";
import Data from "./components/Data";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_CATEGORY_PROGRESS });
  });

  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
