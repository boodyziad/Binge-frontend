import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';

function App() {
  const handleInputChange = (text: string) => {
    console.log(text);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Input onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default App;
