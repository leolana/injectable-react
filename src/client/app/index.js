import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent';
import InjectablesProvider from './../../lib/InjectablesProvider';
import Injectable from './../../lib/Injectable';
import Injector from './../../lib/Injector';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));