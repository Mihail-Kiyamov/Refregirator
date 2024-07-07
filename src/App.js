import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Saved from "./Components/Saved/Saved";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState({});

  const handleSetSaved = (saved) => {
    setSaved(saved);
    navigate("/");
  };

  const handleClear = () => {
    setSaved({});
  };

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          path="/Refregirator"
          element={<Main saved={saved} onClear={handleClear} />}
        />
        <Route
          path="/Refregirator/saved"
          element={<Saved onChoose={handleSetSaved} />}
        />
        <Route path="/Refregirator/about" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
