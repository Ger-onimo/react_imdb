import React, {Component} from "react";
import FilmRelease from "./FilmRelease";

class FilmReleaseList extends Component{

    render () {
        const filmReleaseNodes = this.props.data.map(filmRelease =>{
            return (
                <FilmRelease film={filmRelease.name} key={filmRelease.id}>
                {filmRelease.url}</FilmRelease>
            );
        });

        return (
            <div className="film-release-list">
                {filmReleaseNodes}
            </div>
        );  
    }   
}

export default FilmReleaseList;