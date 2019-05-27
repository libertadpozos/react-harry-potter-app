import React from "react";
import { Link } from "react-router-dom";
import "./DetailCard.scss";

class DetailCard extends React.Component {
  render() {
    const { match, data } = this.props;
    const { cardId } = match.params;
    const arrCard = data.find(character => character.id === parseInt(cardId));

    return (
      <article className="detailCard">
        <div className="detailCard__container">
          <img
            src={arrCard.image}
            alt={arrCard.name}
            className="photo__detail"
          />
          <p className="name__detail">{arrCard.name}</p>
          <p>{`Date of Birth: ${arrCard.dateOfBirth}`}</p>
          {!arrCard.house ? (
            <p>{`House: ${arrCard.name} does not have a house`}</p>
          ) : (
            <p>{`House: ${arrCard.house}`}</p>
          )}

          <p>{`Patronus: ${arrCard.patronus}`}</p>
          {arrCard.alive ? (
            <p>{`${arrCard.name} is alive at the end of the saga!`}</p>
          ) : (
            <p>{`${arrCard.name} is dead at the end of the saga`} </p>
          )}
          <Link className="back" to="/">Back</Link>
        </div>
      </article>
    );
  }
}

export default DetailCard;
