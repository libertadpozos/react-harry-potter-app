import React from "react";
import "./Filters.scss";

class Filters extends React.Component {
  render() {
    const { onChangeName, inputValueName, selectedHouses, houses, onChangeHouse } = this.props;
  
      console.log(inputValueName);
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
        {houses.map(house=>
        <React.Fragment key={house}>
           <label className="label-checkbox" htmlFor={house}> {house} </label>
           <input 
             id={house}
             type="checkbox"
             value={house}
             name="houseOption"
             checked={selectedHouses.includes(house)}
             onChange={onChangeHouse}
           />
        </React.Fragment>
          )}  
       
       
      </div>
    );
  }
}
export default Filters;

