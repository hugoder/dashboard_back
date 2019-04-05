import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';
import Home from './Components/home.component';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">Music Dashboard</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/adminadd'} className="nav-link">Add Artist</Link>
              </li>
              <li className="nav-item">
                <Link to={'/adminupdate'} className="nav-link">Update/Delete Artist</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Switch>
            <Route exact path='/adminadd' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/adminupdate' component={ Index } />
            <Route path='/' component={ Home } />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;