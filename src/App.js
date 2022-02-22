
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';

import weatherD from './component/details';

function App() {
  return (
    <div>
      <Router>
        <Switch>
                          
          
          <Route extract path = '/D' component={weatherD}/>
                   
      </Switch>
      </Router>
    </div>
  );
}

export default App;
