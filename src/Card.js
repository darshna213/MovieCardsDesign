import React from 'react';


function Card(props) {
    return (
        <div className="cards">
            <div className="movie-card-container">
                <div className="image-container">
                    <img src="https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_FMjpg_UX1000_.jpg" alt="image1" />
                </div>
                <div className="movie-detail-container">
                    <div className="movie-name">{props.movieName}</div>
                    <div className="movie-name-header-detail">and the deathly hallows part 1</div>
                    <div className="movie-details">
                        <div className="movie-release-year">2010</div>
                        <div className="movie-time">146min</div>
                        <div className="movie-type">Adventure, Fantasy, Family</div>
                    </div>
                    <div className="movie-description">
                        As Harry races against time and evil to destroy the Horcruxes, he uncovers the existenceof three most powerful objects in the wizarding world: the Deathly Hallows.
                    </div>
                    <div className="rating">
                        <div className="rating-title">Rating:</div>
                        <div className="rating-count">13</div>
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