import "./Podium.css";

interface PodiumProps {
    position: number;
    image: string;
    text: string;
    title: string;
}

export default function Podium({ position, image, text, title }: PodiumProps) {
    return (
        <div className={`place ${position === 1 ? "first" : position === 2 ? "second" : "third"}`}>
            <span>{`${position}º`}</span>
            <img src={image} alt={text} />
            <h2>{title}</h2>
        </div>
    );
}
