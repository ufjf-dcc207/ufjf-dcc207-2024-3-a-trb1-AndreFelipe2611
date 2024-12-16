import "./List.css";
import Rank from "./Rank";

interface ListProps {
  RANK: [number, string, string, string, string][]; 
  IMAGES: { [key: string]: string };
}

function List({ RANK, IMAGES }: ListProps) {
  return (
    <>
      <h1>Top 10 Melhores Jogos 2024</h1>
      <div className="container">
        {RANK.map(([position, image, name, title, text]) => (
          <Rank
            key={position}
            position={position}
            image={IMAGES[image]}
            text={text}
            title={title}
            name={name}
          />
        ))}
      </div>
    </>
  );
}

export default List;
