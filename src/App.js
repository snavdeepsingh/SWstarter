import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./views/Main/Main";
import Header from './Header/Header';
import CharacterDetails from './views/CharacterDetails/CharacterDetails';
import { Provider } from 'react-redux';
import store from './store/index';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Provider store={store}>
            <div>
              <Header />
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route path="/character" component={CharacterDetails} />
                </Switch>
            </div>
            
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
