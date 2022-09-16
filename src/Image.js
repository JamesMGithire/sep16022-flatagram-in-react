import { Component } from "react";
export default class ImageDiv extends Component {
    render() {
        return (
            <div className='ImageDiv'>
                <div className="Image-title"><small>{this.props.newTitle}</small></div>
                <div
                    onClick={this.props.handleClicks}
                    className="ImageTile"
                    style={{ backgroundImage: `url(${this.props.newImage})` }}></div>
            </div>
        );
    }
}