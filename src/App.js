import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Headers";
import Zeus from "./Components/Header/Block 1/Zeus";
import BlockWithGodesses from "./Components/Header/Block 2/BlockWithGodesses";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Zeus />
      <BlockWithGodesses />
    </div>
  );
}

export default App;
