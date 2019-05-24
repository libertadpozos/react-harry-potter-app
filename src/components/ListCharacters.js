import React from 'react';
import './ListCharacters.css';
import Card from './Card';
import PropTypes from "prop-types";

class ListCharacters extends React.Component{
    render(){
        const {data}=this.props;
        console.log(data)
        return(
            <div>
                <ul>
                    {data.map(character=>{
                        return (
                            <li key={character.id}>
                               <p>{character.name}</p>
                               <img src={character.image} alt={character.name}/>
                               <p>{character.house}</p>
                               
                            </li>
                        )
                    })}
                </ul>
                
                <Card />

            </div>
        )
    }
}
ListCharacters.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

export default ListCharacters;
