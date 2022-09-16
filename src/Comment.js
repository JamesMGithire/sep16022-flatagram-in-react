import { Component } from "react";

export default class Comment extends Component {
    constructor(props){
        super();
    }
    render() {
        let handleSubmit = (e) => {
            e.preventDefault();
            let comment = this.inputText.value;
            this.inputText.value="";
            let comments = this.commentsUl.innerHTML;
            if (comment !== "") {
              this.commentsUl.innerHTML = comments + `<li>${comment}</li>`
            }
            else {
              alert("No comment");
            }
          }
        return (
            <div>
                <ul className="comments"
                    ref={content => {this.commentsUl = content }}
                >
                </ul>
                <form
                    className="form"
                >
                    <input
                        autoComplete="off"
                        className="textInput"
                        type="text"
                        placeholder="Add a comment..."
                        ref={input => {this.inputText = input }}
                    />
                    <button
                        className="submit"
                        onClick={handleSubmit}
                    >
                        Post
                    </button>
                </form>
            </div>
        )
    }
}