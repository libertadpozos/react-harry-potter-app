import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.scss";


class DetailCard extends React.Component {
  render() {
    const { match, data } = this.props;
    const { cardId } = match.params;
    const arrCard = data.find(character => character.id === parseInt(cardId));

    return (
      <article>
        <img src={arrCard.image} alt={arrCard.name} />
        <p>{arrCard.name}</p>
        <p>{`Date of Birth: ${arrCard.dateOfBirth}`}</p>
        <p>{`House: ${arrCard.house}`}</p>
        <p>{`Patronus: ${arrCard.patronus}`}</p>
        <Link to="/">Back</Link>
      </article>
    );
  }
}

export default DetailCard;
