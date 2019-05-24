import React from "react";
import "./Card.css";


class Card extends React.Component {
  render() {
    const { name, img, house } = this.props;
    return (
      <div>
        <p>{name}</p>
        <img src={img} alt={name} />
        
        <p>{house}</p>
      </div>
    );
  }
}

export default Card;
