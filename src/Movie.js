import React from "react";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, medium_cover_image}){
    return (
        <div>
        <img src ={medium_cover_image} alt={title}/>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <p>{summary}</p>
        </div>
        )
}

Movie.propTypes ={
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    medium_cover_image : PropTypes.string.isRequired
}

export default Movie;