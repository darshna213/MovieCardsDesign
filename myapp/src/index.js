import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';

ReactDOM.render(
  <>
    <Card movieName="herry potter"
    movieImageUrl="https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_FMjpg_UX1000_.jpg"
      headerDetail="and the deathly hallows part 1"
      releaseYear="2010"
      movieTime="146min"
      movieType="Adventure, Fantasy, Family"
      movieDescription="As Harry races against time and evil to destroy the Horcruxes, he uncovers the existenceof three most powerful objects in the wizarding world: the Deathly Hallows."
      rating="13"
    />

    <Card movieName="perfume"
    movieImageUrl="https://perfumesociety.org/wp-content/uploads/2020/12/Fragrant-Film-Club-Perfume-movie-683x1024.jpg"
      headerDetail="the story of a murderer"
      releaseYear="2006"
      movieTime="147min"
      movieType="Thriller/Drama"
      movieDescription="Set in 18th century Paris, the story of a man with an extraordinarily acute sense of smell takes a dark turn when his quest to create the ultimate fragrance leads to murder."
      rating="20"
    />
    
  </>,
  document.getElementById("root")
);