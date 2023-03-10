import Card from "../card/card.component";
import "./card-list.style.css";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map((monster: Monster, idx: number) => {
        return <Card key={idx} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
