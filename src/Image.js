import { Component } from "react";

function fetcher() {
    return fetch("https://dog.ceo/api/breeds/image/random");
}

export default class ImageDiv extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    state = {}
    componentWillMount() {
        fetcher()
            .then(resp => resp.json())
            .then(result => this.setState(result))
    }

    render() {
        let imageFetcher = () => {
            fetcher()
                .then(resp => resp.json())
                .then(result => this.setState(result))
        }
        console.log(this.state)
        return (
            <div className='ImageDiv'>
                <div className="Image-title"><small>Flatagram Random Dog</small></div>
                <div
                    onClick={imageFetcher}
                    className="ImageTile"
                    style={{ backgroundImage: `url(${this.state.message})` }}></div>
            </div>
        );
    }
}