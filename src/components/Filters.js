import React from "react";
import "./Filters.scss";

class Filters extends React.Component {
  render() {
      const {onChangeName, inputValueName}=this.props
    return (
      <div className="filter__container">
        <label htmlFor="filter-name" className='hidden'>Escribe un personaje</label>
        <input className="filter__input"
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
