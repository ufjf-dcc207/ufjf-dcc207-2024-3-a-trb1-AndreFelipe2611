import "./List.css";
import Rank from "./Rank";
import { isol } from '../isol';

function List() {
  const { RANK, IMAGES } = isol;

  return (
    <>
      <h1>Top 10 Melhores Jogos 2024</h1>
      {RANK.map(([position, image, name, title, text]) => (
        <Rank
          key={position}
          position={position}
          image={IMAGES[image]} // Agora funciona com índice dinâmico
          text={text}
          title={title}
          name={name}
        />
      ))}
    </>
  );
}

export default List;
