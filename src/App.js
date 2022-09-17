import React from 'react';
import './App.css';
import Comment from './Comment';
import ImageDiv from './Image';
import flat from './flatagram-logo.png'

export default function App() {
  const [states, setStates] = React.useState("");
  function fetcher() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(result => setStates(result.message))
  }
  const [commentList, setCommentL] = React.useState([{ "content": "Hello", "id": Math.ceil(Math.random() * 10000) }])
  React.useEffect(() => {
    fetcher()
  }, [])
  let title = states
  let newTtl = (title.replace("https://images.dog.ceo/breeds/", "").slice(0, title.indexOf("/"))).replace("/", "")
  let capitalisedTitle = newTtl.toUpperCase();

  let inputText = null;
  function handleDelete(e) {
    setCommentL(prevVal => (prevVal.filter((el) =>
      parseInt(el.id) !== parseInt(e.target.id)
    ))
    )
  }
  function handleSubmit(e) {
    e.preventDefault();
    let comment = inputText.value
    inputText.value = "";
    if (comment !== "") {
      setCommentL(prev => [...prev, { "content": comment, "id": Math.ceil(Math.random() * 10000) }])
    }
    else {
      alert("No comment");
    }
  }
  return (
    <div className="App">
      <img className="logo" src={flat} alt='flatagram logo' />
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