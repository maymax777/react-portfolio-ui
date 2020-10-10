import React from 'react';
import './index.css';
import 'assets/css/main.css';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Thumbnail from 'components/layout/Thumbnail';

function App() {
  return (
    <div className="App" id="name">
      <Header />
      <Thumbnail />
      <Footer />
    </div>
  );
}

export default App;
