import Navbar from "./components/Navbar";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;
