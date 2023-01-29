import { Component } from "react";
import './search-box.style.css';


class SearchBox extends Component {
  render() {
    return (
      <input className="monster search-box" type="search" onChange={this.props.onSearchChange} placeholder="Type Here" />
    );
  }
}

export default SearchBox;