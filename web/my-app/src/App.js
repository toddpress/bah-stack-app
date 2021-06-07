import './App.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AddTutorial from './components/AddTutorial'
import Tutorial from './components/Tutorial'
import TutorialsList from './components/TutorialsList'
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to={'/tutorials'}>Tutorials</Link>
            </li>
            <li>
              <Link to={'/add'}>Add Tutorial</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path={['/', '/tutorials']} component={TutorialsList} />
            <Route exact path={'/add'} component={AddTutorial} />
            <Route path={'/tutorials/:id'} component={Tutorial} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
