import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../../routes/Home';
import '../../styles/tailwind.output.css';
import Card from '../Card';
import GlobalContextProvider from '../../context/GlobalContext';
import Header from '../Header';

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <Switch>
          <div className="px-6 lg:px-20">
            <Route path="/card">
              <Header />
              <Card />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
