import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ""
    };
  }

  // Promiss
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => this.setState({ monster: json }));
  }

  // Async / Await
  // async componentDidMount() {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await data.json();
  //   this.setState({
  //     monster: json
  //   });
  // }
  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;

    const monsterData = monster.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onSearchChange={onSearchChange} />
        <CardList monsters={monsterData} />
      </div>
    );
  }
}

export default App;
