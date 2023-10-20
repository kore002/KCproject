import { Route, Routes } from "react-router-dom";
import MainPage from "./component/template/MainPage.jsx";
import CardBlock_tset from "./component/assets/CardBlock_test.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/card" element={<CardBlock_tset />} />
    </Routes>
  );
}

export default App;
