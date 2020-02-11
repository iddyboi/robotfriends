import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";

import "tachyons";

class App extends Component {
  state = {
    robots: [],
    searchfeild: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    this.setState({ searchfeild: e.target.value });
  };

  render() {
    const filtertedrobots = this.state.robots.filter(robot => {
      return robot.username
        .toLowerCase()
        .includes(this.state.searchfeild.toLowerCase());
    });
    if (!this.state.robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filtertedrobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
