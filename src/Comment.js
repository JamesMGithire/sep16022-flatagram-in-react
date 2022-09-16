import { Component } from "react";

export default class Comment extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <ul className="comments"
                    ref={this.props.commentContentRef}
                >
                    <li>Coffee</li>
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