import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';

//Render app based on current route
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map(route =>
            <Route key={ route.path } { ...route }/>
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
