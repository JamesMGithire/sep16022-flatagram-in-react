import { Component } from "react"

export default class ListItem extends Component {
    render() {
        return (
            <li id={this.props.id}
                onClick={this.props.del}
            >
                {this.props.content}
            </li>
        )
    }
}