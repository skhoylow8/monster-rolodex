import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id:'asc1'
        },
        {
          name: 'Dracula',
          id:'asc2'
        },
        {
          name: 'Zombie',
          id:'asc3'
        }
      ]
    }
  }
  render(){
    return(
      <div className="App">
        {
          this.state.monsters.map(monster => <h1 key={ monster.id }>{ monster.name }</h1>)
        }
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
