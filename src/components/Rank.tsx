import "./Rank.css";

interface RankProps {
  position: number;
  image: string;
  text: string;
  title?: string;
  name?: string;
}

export default function Rank({
  position,
  image,
  text,
  title,
  name,
}: RankProps) {
  return (
    <>
      {position <= 3 ? (
        <div
          className={
            position === 1 ? "first" : position === 2 ? "second" : "third"
          }
        >
          <span>{position}</span>
          <img src={image} alt={text} />
          {name && <h4>{name}</h4>}
          {title && <p>{title}</p>}
        </div>
      ) : (
        <div className="other">
          <strong>{position}</strong>
          <img className="img2" src={image} alt={text} />
          {name && <h4>{name}</h4>}
          {title && <p>{title}</p>}
        </div>
      )}
    </>
  );
}
