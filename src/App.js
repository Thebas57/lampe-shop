import { useState } from "react";
import Lampes from "./components/Lampes";
import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  const [selectedLampe, setSelectedLampe] = useState(0);
  const handleLampeChange = (lampe) => {
    console.log(lampe);
    setSelectedLampe(lampe);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="left">
          <div className="description">
            <p>
              Collection of lighting is inspired by the geometric works of the
              great Suprematist artists Kissitzky and Kazimir Malevich.
              <br />
              <br />
              Suprematism is a modernist movement in the art of the early
              twentieth century, focused on the basic geometric forms, such as
              circles, squares, lines and rectangles. The geometric structure of
              the lamps will always look like a small art objects in your house.
            </p>
          </div>
          <Lampes selectedLampe={selectedLampe} onChange={handleLampeChange} />
        </div>
        <div className="right">
          <img src="/lampe1.png" alt="lampe1" className={selectedLampe===0 ? "active" : ""} />
          <img src="/lampe2.png" alt="lampe2" className={selectedLampe===1 ? "active" : ""} />
          <img src="/lampe3.png" alt="lampe3" className={selectedLampe===2 ? "active" : ""} />
        </div>
      </div>
    </div>
  );
}

export default App;
