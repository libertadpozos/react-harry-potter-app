import React from "react";
import "./ListCharacters.css";
import Card from "./Card";
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
                {/* <Card
                  name={}
                  img={}
                  house={character.house}
                /> */}
                </Link>
              </li>
            );
          })}
        </ul>

        <Card />
      </div>
    );
  }
}
ListCharacters.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListCharacters;
