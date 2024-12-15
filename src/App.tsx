import List from './components/List';


const rank: [number, string, string, string, string][] = [
  [1, 'game1', 'GamOne', 'Best ', 'A '],
  [2, 'game2', 'GameTwo', 'Top ', 'A '],
  // 
];

const images = {
  game1: 'path/to/game1-image.jpg',
  game2: 'path/to/game2-image.jpg',
 
};

function App() {
  return (
    <div className="App">
      <List RANK={rank} IMAGES={images} />
    </div>
  );
}

export default App;
