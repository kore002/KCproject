import { Route, Routes } from "react-router-dom";
import MainPage from "./component/template/MainPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
