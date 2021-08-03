import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list.compenent';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this); // this allows our function to recognize the this keyword in our new class method
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) => { //arrow functions automatically bind 'this' to the context where it was given its existence which is the App component
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state; //destructuring ==> const monsters=this.state.monsters
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monster' 
          handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
