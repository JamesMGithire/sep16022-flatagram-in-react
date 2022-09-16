import { Component } from "react"

export default class ListItem extends Component {
    render() {
        return (
            <li
                onClick={this.props.del}
            >
                {this.props.content}
            </li>
        )
    }
}