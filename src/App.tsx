import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import { RedocStandalone } from 'redoc';

const App = () => {
  return (
    <div className="App">
      <RedocStandalone options={{hideDownloadButton: true}} specUrl="https://eiffel-back.aws-test.paris.cl/api-json" />
    </div>
  );
}

export default App;
