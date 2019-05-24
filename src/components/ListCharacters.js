import React from "react";
import "./ListCharacters.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListCharacters extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <ul>
          {data.map(character => {
            return (
              <li key={character.id}>
                <Link to={`/card/${character.id}`}>
                <p>{character.name}</p>
                <img src={character.image} alt={character.name} />
                <p>{character.house}</p>

                </Link>
              </li>
            );
          })}
        </ul>

      </div>
    );
  }
}
ListCharacters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListCharacters;
