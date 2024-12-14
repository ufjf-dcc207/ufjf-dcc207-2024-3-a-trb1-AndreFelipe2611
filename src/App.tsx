import "./App.css";
import Podium from "./Podium";

function App() {
  return (
    <section className="podium">
      <Podium position={2} top={2} image="game-a.jpg" text="Game A" title="Game A" />
      <Podium position={1} top={1} image="game-b.jpg" text="Game B" title="Game B" />
      <Podium position={3} top={3} image="game-c.jpg" text="Game C" title="Game C" />
    </section>
  );
}

export default App;
