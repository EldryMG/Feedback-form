import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from  '../Support/Support';
import Comments from  '../Comments/Comments';
import Review from '../Review/Review';
import Final from '../Final/Final';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <main>
{/* There will be 4 pages to this app, titled: 
Feeling, Understanding, Support and Comments. 
This is the first route to page 1: "Feeling" and will also be Home Page */}
        <Router>
          <Route exact path="/" component={Feeling} />
        </Router> 
         <Router>
          <Route exact path="/understanding" component={Understanding} />
        </Router>
        <Router>
          <Route exact path="/support" component={Support} />
        </Router>
        <Router>
          <Route exact path="/comments" component={Comments} />
        </Router>
        <Router>
          <Route exact path="/review" component={Review} />
        </Router>
        <Router>
          <Route exact path="/final" component={Final} />
        </Router>
      </main>
    </div>
  );
}

export default App;
