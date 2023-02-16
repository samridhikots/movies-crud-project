import React from 'react';
import data from './components/back/Data/MovieList'
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { movieList } = data;
  const [favouriteItems, setFavouriteItems] = useState([]);

  const handleAddMovie = (movie) => {
    const movieExist = favouriteItems.find((item) => item.key === movie.key);
  console.log(movie)


    if (movieExist) {
      setFavouriteItems(
        favouriteItems.map((item) =>
          item.key === movie.key
            ? { ...movieExist, quantity: movieExist.quantity + 1 } : item)
      );
    }
    else {
      setFavouriteItems([...favouriteItems, { ...movie, quantity: 1 }]);
    }
  }

  const handleRemoveMovie = (movie) => {
    const movieExist = favouriteItems.find((item) => item.key === movie.key);
    if (movieExist.quantity === 1) {
      setFavouriteItems(favouriteItems.filter((item) => item.key !== movie.key));
    }
    else {
      setFavouriteItems(
      favouriteItems.map((item) =>
        item.key === movie.key
          ? { ...movieExist, quantity: movieExist.quantity - 1 } : item)
      );
    }
  }

  const handleFavouriteClearance = ()=> {
    setFavouriteItems([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes movieList={movieList} favouriteItems={favouriteItems}
          handleAddMovie={handleAddMovie}
          handleRemoveMovie={handleRemoveMovie}
          handleFavouriteClearance={handleFavouriteClearance}
        />
   
    </div>
  );
}

export default App;
