import React, { Component } from "react";
import { Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
 
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
        
        />
        <Route 
          path="/catalog" 
          component={} />
        <Route
          path="/garantee"
          render={() => {}}
        />
        <Route
          path="/contacts"
          render={() => {}}
        />
      </div>
    );
  }
}

export default App;



