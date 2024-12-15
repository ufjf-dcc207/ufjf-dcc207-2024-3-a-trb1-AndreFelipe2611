import "./App.css";
import Podium from "./Podium";
import List from "./List";

function App() {
  return (
    <>
      <section className="podium">
        <Podium position={2} image="" text="" title="Game A" />
        <Podium position={1} image="" text="Game B" title="Game B" />
        <Podium position={3} image="" text="Game C" title="Game C" />
      </section>

      <ul className="list">
        <List top={4} image="" text="Game D" />
        <List top={5} image="" text="Game E" />
        <List top={6} image="" text="Game F" />
        <List top={7}image="" text="Game F" />
      </ul>
    </>
  );
}

export default App;
