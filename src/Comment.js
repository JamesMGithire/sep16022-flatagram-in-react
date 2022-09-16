import { Component } from "react";
import ListItem from "./ListItem";

export default class Comment extends Component {
    render() {
        let newArr = this.props.commentlist
        let list = newArr.map((el) => {
            return (
                <ListItem
                key = {Math.random()*10000}
                    content={el.content}
                    del={this.props.del}
                />)
        })
        return (
            <div>
                <ul className="comments"
                >{list}
                </ul>
                <form
                    className="form"
                >
                    <input
                        autoComplete="off"
                        className="textInput"
                        type="text"
                        placeholder="Add a comment..."
                        ref={this.props.commentRef}
                    />
                    <button
                        className="submit"
                        onClick={this.props.handlePost}
                    >
                        Post
                    </button>
                </form>
            </div>
        )
    }
}