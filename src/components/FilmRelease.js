import React, {Component} from "react";

class FilmRelease extends Component{
    render(){
        return(
            <div className="film-release">
              <ul>
                <li>{this.props.film}</li>
              </ul>
            </div>
        );
    }
}

export default FilmRelease;