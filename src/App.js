import React, { useEffect } from 'react';
import './App.css';
import ImageDiv from './Image';

export default function App() {
  const [states, setStates] = React.useState({});
  function fetcher() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(result => setStates(result))
  }
  useEffect(() => {
    fetcher()
  }, [])
  return (
    <div className="App">
      <img className="logo" src='./flatagram-logo.png' />
      <div className='Flatagram-container'>
        <ImageDiv
          handleClicks={fetcher}
          newImage={states.message}
        />
      </div>
    </div>
  );
}