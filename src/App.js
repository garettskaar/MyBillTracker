import React from 'react';
import './style/App.css';
import {Header, Footer, Navigator } from './components/Export.js'


function App() {
  return (
      <div className="container">
          <Header />
          <Navigator />
          <Footer />
      </div>
  );
}

export default App;
