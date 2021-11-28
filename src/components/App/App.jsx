import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Final from '../Final/Final';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import Signature from '../Signature/Signature';
import { IoSkull } from "react-icons/io5";

function App() {
  const history = useHistory();

  const toAdminx = () => {
    console.log('would this work?')
    history.push('/')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <h3><IoSkull size="1.5em" color="white" /> Don't forget it! <IoSkull size="1.5em" color="white" /></h3>
      </header>
      <main>
        {/* There will be 6 pages to this app, titled: 
        Feeling, Understanding, Support and Comments, Review and Final 
        This is the first route to page 1: "Feeling" and will also be Home Page.
        Final takes user back to Home if they want to restart survey. */}
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

        <Router>
          <Route path="/admin" component={Admin} />
        </Router>

      </main>
    </div>

  );
}

export default App;
