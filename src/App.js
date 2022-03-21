import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Authentication from './admin/components/entrance/authentication';
import Login from './admin/components/entrance/login';
import Main from './Main';
function App() {
  
  return (
    <Switch>
    <div className="App">
      <Route path="/main" component={Main} />
        <Route path="/registration" component={Login} />
         <Route path="/" exact='./admin/components/entrance/authentication.js' component={Authentication}/>
    </div>
    </Switch> 
  );
}

export default App;
