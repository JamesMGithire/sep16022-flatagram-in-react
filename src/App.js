import React from 'react';
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
  const [commentList, setCommentL] = React.useState([{ "content": "Hello" }])
  React.useEffect(() => {
    fetcher()
  }, [])
  let title = states
  let newTtl = (title.replace("https://images.dog.ceo/breeds/", "").slice(0, title.indexOf("/"))).replace("/", "")
  let capitalisedTitle = newTtl.toUpperCase();

  let inputText = null;
  function handleDelete(e) {
    setCommentL(prevVal => {
      return (prevVal.filter((el) =>
        el.content !== e.target.textContent
      ));
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    let comment = inputText.value
    inputText.value = "";
    if (comment !== "") {
      setCommentL(prev => [...prev, { "content": comment }])
    }
    else {
      alert("No comment");
    }
  }
  console.log("run")
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
          commentlist={commentList}
          commentRef={input => { inputText = input }}
          del={handleDelete}
        />
        <div className='ball' id="ball4"></div>
        <div className='ball' id="ball1"></div>
        <div className='ball' id="ball2"></div>
        <div className='ball' id="ball3"></div>
      </div>
    </div>
  );
}