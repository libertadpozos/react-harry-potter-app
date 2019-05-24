import React from 'react';
import './App.css';
import ListCharacters from './components/ListCharacters'
import Filters from './components/Filters'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      data:[],
      isFetching: true
    }
    this.getData=this.getData.bind(this);
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



  render(){
    const {data, isFetching}=this.state;
  return (
    <div>
      <header>
      <h1>Harry Potter</h1>
      </header>
      {isFetching 
      ? <p>Loading...</p>
      : (
        <main>
        <Filters/ >
        <ListCharacters data={data}/>
      </main>
      )
    }
    </div>
  );
}
}

export default App;
