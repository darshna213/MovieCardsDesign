import React from 'react';


function Card(props) {
    return (
        <div className="cards">
            <div className="movie-card-container">
                <div className="image-container">
                    <img src={props.movieImageUrl} alt="movieposter" />
                </div>
                <div className="movie-detail-container">
                    <div className="movie-name">{props.movieName}</div>
                    <div className="movie-name-header-detail">{props.headerDetail}</div>
                    <div className="movie-details">
                        <div className="movie-release-year">{props.releaseYear}</div>

                        <div className="movie-time">{props.movieTime}</div>
                        <div className="movie-type">{props.movieType}</div>
                    </div>
                    <div className="movie-description">{props.movieDescription}</div>
                    <div className="rating">
                        <div className="rating-title">Rating:</div>
                        <div className="rating-count">{props.rating}</div>
                    </div>
                    <div className="buttons">
                        <div className="watch-trailer-button">Watch Trailer</div>
                        <div className="watch-movie-button">Watch movie</div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Card;