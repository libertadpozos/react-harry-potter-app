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
        byName:""
      }
    }
    this.getData=this.getData.bind(this);
    this.handleInputFilterName=this.handleInputFilterName.bind(this)
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
    this.setState({
      data: newData,
      isFetching: false
      }
    )
    })
  }

  handleInputFilterName(event){
    const inputValue= event.target.value
    this.setState(prevState=>{
      return {  
        ...prevState.filters,
          filters:{
            byName: inputValue
          } 
      }
    })
  }

  getFilteredList(){
    return this.state.data.filter(character => {
      if (character.name.includes(this.state.filters.byName)) {
        return true;
      } else {
        return false;
      }
    });
  }
  
  render(){
  const {data, isFetching}=this.state;
  return (
    <div>
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
            onChangeName={this.handleInputFilterName}
            inputValueName={this.state.filters.byName}
            />
            <ListCharacters data={this.getFilteredList()}/>
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
    <footer>
        <p>Harry Potter Cards</p>
        <p>by Libertad Pozos</p>
        <p>2019</p>
    </footer>
    </div>
  );
}
}
export default App;
