import React from 'react';
import './style/App.css';
import {Header, Footer, Navigator } from './components/Export.js'
import { ReactComponent as Seal } from './graphics/idaho_seal.svg';

function App() {
  return (
      <div>
          <Seal />
          <Header />
          <Navigator />
          <Footer />
      </div>
  );
}

export default App;
