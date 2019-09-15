import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery title="Lotto" numBalls='6' maxNum='40' />
    </div>
  );
}

export default App;
