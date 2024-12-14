import "./Podium.css";

interface PodiumProps {
    position: number;
    top: number;
    image: string;
    text: string;
    title: string;
}

export default function Podium({ position, top, image, text, title }: PodiumProps) {
  
    const className = position === 1 ? "first" : position === 2 ? "second" : "third";
    return (
        <div className={`place ${className}`}>
            <span>{top}</span>
            <span>{position}</span>
            <img src={image} alt={text} />
            <h2>{title}</h2>
        </div>
    );
}
