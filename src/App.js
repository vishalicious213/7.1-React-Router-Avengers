import React from 'react';
// import { BrowserRouter as Router} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import Navbar from './components/Navbar';
import AvengerPage from './components/AvengerPage';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/avengers' component={AvengersList}/>
        <Route path='/avengers/:id' component={AvengerPage} />
      </div>
    </div>
  );
}

export default App;
