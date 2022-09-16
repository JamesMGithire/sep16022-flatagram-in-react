import { Component } from "react";

export default class Comment extends Component{
    render(){
        return(
            <div>
                <form>
                    <input
                    className="textInput"
                    type="text"
                    />
                    <button>
                        Post
                    </button>
                </form>
                </div>
        )
    }
}