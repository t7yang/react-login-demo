import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/Login';
import { GlobalStateContext, useGlobalState } from './state';

const App: React.FC = () => {
  const [state, dispatch] = useGlobalState();

  return (
    <div className="App">
      <GlobalStateContext.Provider value={{ state, dispatch }}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/login" component={LoginPage}></Route>
          </Switch>
        </Router>
      </GlobalStateContext.Provider>
    </div>
  );
};

export default App;
