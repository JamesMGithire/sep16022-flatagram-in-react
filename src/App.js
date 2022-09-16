import React from 'react';
import './App.css';
import Comment from './Comment';
import ImageDiv from './Image';
import ListItem from './ListItem';

export default function App() {
  const [states, setStates] = React.useState("");
  function fetcher() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => resp.json())
      .then(result => setStates(result.message))
  }
  React.useEffect(() => {
    fetcher()
  }, [])
  let title = states
  let newTtl = (title.replace("https://images.dog.ceo/breeds/", "").slice(0, title.indexOf("/"))).replace("/", "")
  let capitalisedTitle = newTtl.charAt(0).toUpperCase() + newTtl.slice(1);

  // let commentsUl = null;
  let inputText = null;
  function handleDelete(e) {
    setCommentL(prevVal => {
      return(prevVal.filter((el) =>
        el.content !== e.target.textContent
      ));
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    let comment = inputText.value
    // let comments = commentsUl.innerHTML;
    inputText.value = "";
    if (comment !== "") {
      setCommentL(prev => [...prev, { "content": comment }])
    }
    else {
      alert("No comment");
    }
  }
  const [commentList, setCommentL] = React.useState([{ "content": "Hello" }])
  React.useEffect(() => {
    setCommentL(commentList)
    console.log(commentList)
  }, [commentList])
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
      </div>
    </div>
  );
}