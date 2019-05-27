import React from 'react';
import './App.scss';
import ListCharacters from './components/ListCharacters'
import Filters from './components/Filters'
import { Switch, Route } from "react-router-dom";
import DetailCard from './components/DetailCard';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      data:[],
      isFetching: true,
      filters:{
        byName:"",
        houses:[],
        selectedHouses:[]
      }
    }
    this.getData=this.getData.bind(this);
    this.handleInputFilterName=this.handleInputFilterName.bind(this)
    this.handleCheckboxHouses=this.handleCheckboxHouses.bind(this)
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response=> response.json())
    .then(data=> {
      const newData= data.map((character,index)=>{
        return {
          ...character,
          id: index+1 
        }
      })
    this.setState(prevState=>{
      return {
        data: newData,
        isFetching: false, 
        filters:{
          ...prevState.filters,
          houses:newData
          .map(character=>character.house)
          .filter((item, ind, arr) => arr.indexOf(item) === ind)
  
        }
      }

    }
    )
    })
  }

  handleInputFilterName(event){
    const inputValue= event.target.value
    this.setState(prevState=>{
      return {  
          filters:{
            ...prevState.filters,
            byName: inputValue,
          } 
      }
    })
  }
  handleCheckboxHouses(event){
      const { value, checked } = event.target;
      console.log(value, checked);
  
      this.setState(prevState => {
        return {
          filters: {
            ...prevState.filters,
            selectedHouses: prevState.filters.selectedHouses.find(item => item === value)
              ? prevState.filters.selectedHouses.filter(item => item !== value)
              : prevState.filters.selectedHouses.concat(value)
          }
        };
      });
  }

  getFilteredList(){

    return  this.state.data.filter(character => {
      if (character.name.toLowerCase().includes(this.state.filters.byName.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .filter(character=>
       !this.state.filters.selectedHouses.length || 
       this.state.filters.selectedHouses.includes(character.house)
      ) 
    ;
  }
  
  render(){
  const {data, isFetching}=this.state;
  return (
    <div className="general__container">
      <header>
      <h1 className="title">It's LeviOsa not LeviosA</h1>
      </header>
      {isFetching 
      ? <p>Loading...</p>
      : (
        <React.Fragment>
        <Switch>
          <Route
          exact path="/"
          render={() => (
            <main>
            <Filters 
            data={data}
            onChangeName={this.handleInputFilterName}
            inputValueName={this.state.filters.byName}
            houses={this.state.filters.houses}
            selectedHouses={this.state.filters.selectedHouses}
            onChangeHouse={this.handleCheckboxHouses}
            />
            <ListCharacters data={this.getFilteredList()}
            inputValueName={this.state.filters.byName}
            selectedHouses={this.state.filters.selectedHouses}
            />
          </main>
          )}
      />

      <Route
      path="/card/:cardId"
      render={routerProps=>(
        <DetailCard match={routerProps.match} data={data} />
      )}
      />
      </Switch>
      </React.Fragment>
      )
    }
    <footer className="footer__container">
        <p className="title__footer">Harry Potter Cards</p>
        <p className="author">Libertad Pozos</p>
        <p className="year__footer">2019</p>
      
    </footer>
    </div>
  );
}
}
export default App;
