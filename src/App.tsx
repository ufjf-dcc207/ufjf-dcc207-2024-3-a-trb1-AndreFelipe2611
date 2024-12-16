import List from './components/List';
import { isol } from './isol'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <List RANK={isol.RANK} IMAGES={isol.IMAGES} />
    </div>
  );
}

export default App;
