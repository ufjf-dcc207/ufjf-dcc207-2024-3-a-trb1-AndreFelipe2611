import "./Rank.css";

interface RankProps {
  position: number; 
  image: string; 
  text: string; 
  title?: string; 
  name?: string; 
}

export default function Rank({ position, image, text, title, name }: RankProps) {
  
  const className =
    position === 1
      ? "first"
      : position === 2
      ? "second"
      : position === 3
      ? "third"
      : position >= 4 && position <= 10
      ? "other"
      : "";

  return (
    <div className={className}>
      <span>{position}</span>
      <img src={image} alt={text} />
      {name && <h2>{name}</h2>}
      {title && <p>{title}</p>}
    </div>
  );
}
