import React, { useEffect } from 'react';
import './App.css';
import ImageDiv from './Image';

export default function App() {
  const [states, setStates] = React.useState("");
  function fetcher() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(result => setStates(result.message))
  }
  useEffect(() => {
    fetcher()
  }, [])
  let title = states
  let newTtl = (title.replace("https://images.dog.ceo/breeds/", "").slice(0, title.indexOf("/"))).replace("/", "")
  let capitalisedTitle = newTtl.charAt(0).toUpperCase() + newTtl.slice(1)
  return (
    <div className="App">
      <img className="logo" src='./flatagram-logo.png' alt='flatagram logo' />
      <div className='Flatagram-container'>
        <ImageDiv
          handleClicks={fetcher}
          newImage={states}
          newTitle={capitalisedTitle}
        />
      </div>
    </div>
  );
}