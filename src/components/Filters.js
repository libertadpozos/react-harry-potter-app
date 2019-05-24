import React from "react";
import "./Filters.scss";

class Filters extends React.Component {
  render() {
      const {onChangeName, inputValueName}=this.props
    return (
      <div>
        <label htmlFor="filter-name">Escribe un personaje</label>
        <input
          id="filter-name"
          type="text"
          placeholder="Hermione Granger"
          value={inputValueName}
          onChange={onChangeName}
        />
      </div>
    );
  }
}
export default Filters;
