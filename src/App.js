import React, { useEffect } from 'react';
import './App.css';
import Comment from './Comment';
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
  let capitalisedTitle = newTtl.charAt(0).toUpperCase() + newTtl.slice(1);

  let commentsUl = null;
  let inputText = null;
  let handleSubmit = (e) => {
    e.preventDefault();
    let comment = inputText.value
    let comments = commentsUl.innerHTML;
    inputText.value = "";
    if (comment !== "") {
      commentsUl.innerHTML = comments + `<li>${comment}</li>`
    }
    else {
      alert("No comment");
    }
  }
  return (
    <div className="App">
      <img className="logo" src='./flatagram-logo.png' alt='flatagram logo' />
      <div className='Flatagram-container'>
        <ImageDiv
          handleClicks={fetcher}
          newImage={states}
          newTitle={capitalisedTitle}
        />
        <Comment
          handlePost={handleSubmit}
          commentContentRef={content => { commentsUl = content }}
          commentRef={input => { inputText = input }}
        />
      </div>
    </div>
  );
}