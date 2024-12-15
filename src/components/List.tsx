import "./List.css";

interface ListProps {
  top: number;
  image: string;
  text: string;
}

export default function List({ top, image, text }: ListProps) {
  const topList = top === 4 ? "fourth" : top === 5 ? "five" : "other";

  return (
    <li className={topList}>
      <strong>{top}</strong>
      <img src={image} alt={text} />
      <span>{text}</span>
    </li>
  );
}
