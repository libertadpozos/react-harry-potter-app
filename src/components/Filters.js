import React from "react";
import "./Filters.scss";

class Filters extends React.Component {
  render() {
    const { onChangeName, inputValueName, onChangeHouse } = this.props;
    return (
      <div className="filter__container">
        <label htmlFor="filter-name" className="hidden">
          Escribe un personaje
        </label>
        <input
          className="filter__input"
          id="filter-name"
          type="text"
          placeholder="Hermione Granger"
          value={inputValueName}
          onChange={onChangeName}
        />
        <div className="filter__houses">
          <label htmlFor="Gryffindor">
            <input
              id="Gryffindor"
              type="checkbox"
              value="Gryffindor"
              name="houses"
              onChange={onChangeHouse}
            />
            Gryffindor
          </label>
          <label htmlFor="Hufflepuff">
            <input
              id="Hufflepuff"
              type="checkbox"
              value="Hufflepuff"
              name="houses"
              onChange={onChangeHouse}
            />
            Hufflepuff
          </label>
          <label htmlFor="Ravenclaw">
            <input
              id="Ravenclaw"
              type="checkbox"
              value="Ravenclaw"
              name="houses"
              onChange={onChangeHouse}
            />
            Ravenclaw
          </label>
          <label htmlFor="Slytherin">
            <input
              id="Slytherin"
              type="checkbox"
              value="Slytherin"
              name="houses"
              onChange={onChangeHouse}
            />
            Slytherin
          </label>
        </div>
      </div>
    );
  }
}
export default Filters;
