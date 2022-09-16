import { Component } from "react";

function fetcher() {
    return fetch("https://dog.ceo/api/breeds/image/random");
}
export default class ImageDiv extends Component {
    constructor() {
        super();
    }
    state = {}
    componentWillMount(){
        fetcher()
            .then(resp => resp.json())
            .then(result => this.setState(result))
    }
    render() {
        console.log(this.state)
        return (
            <div className='ImageDiv'>
                <div className="Image-title"><small>Flatagram Random Dog</small></div>
                <div 
                className ="ImageTile" 
                style={{backgroundImage:this.state.message}}></div>
            </div>
        );
    }
}