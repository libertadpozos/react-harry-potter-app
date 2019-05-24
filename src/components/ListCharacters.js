import React from "react";
import "./ListCharacters.css";
import Card from "./Card";
import PropTypes from "prop-types";

class ListCharacters extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        <ul>
          {data.map(character => {
            return (
              <li key={character.id}>
                <Card
                  name={character.name}
                  img={character.image}
                  house={character.house}
                />
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
