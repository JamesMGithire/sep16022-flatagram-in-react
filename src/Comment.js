import { Component } from "react";

export default class Comment extends Component {
    render() {
        return (
            <div>
                <ul className="comments"
                    ref={this.props.commentContentRef}
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