import { Component } from "react";

export default class ImageDiv extends Component {
    render() {

        return (
            <div className='ImageDiv'>
                <div className="Image-title"><small>Flatagram Random Dog</small></div>
                <img src="./flatagram-logo.png" />
            </div>
        );
    }
}