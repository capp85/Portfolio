import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ImageContainer from './components/ImageContainer/ImageContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <NavBar />
        <ImageContainer />
      </header>
    </div>
  );
}

export default App;
