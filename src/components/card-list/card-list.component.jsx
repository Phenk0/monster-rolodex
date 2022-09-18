import Card from "../card/card.component";

import classes from "./card-list.module.css";

const CardList = ({ monsters }) => (
  <div className={classes["card-list"]}>
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

export default CardList;
