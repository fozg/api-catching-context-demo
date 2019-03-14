import React, { Component } from 'react';

import ApiCatchingWrap from './context/ApiCatchingContext';
import Test from './components/Test'
class App extends Component {
  render() {
    return (
      <ApiCatchingWrap>
        <Test />
      </ApiCatchingWrap>
    );
  }
}

export default App;
