import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ListCharacters.scss";

class ListCharacters extends React.Component {
  render() {
    const { data } = this.props;
    return (
      
        <ul className="list__container">
          {data.map(character => {
            return (
              <li key={character.id}>
                <Link to={`/card/${character.id}`}>
                <p>{character.name}</p>
                <img className="photo__list" src={character.image} alt={character.name} />
                <p>{character.house}</p>
                </Link>
              </li>
            );
          })}
        </ul>

      
    );
  }
}
ListCharacters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListCharacters;
