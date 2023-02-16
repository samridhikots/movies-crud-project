import React from "react";
import { Route, Routes} from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import Movies from "../Movies/Movies";
import AboutUs from "../AboutUs/AboutUs";
import Favourites from "../Favourites/Favourites";

const Myroutes = ({
  movieList,
  favouriteItems,
  handleAddMovie,
  handleRemoveMovie,
  handleFavouriteClearance,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Movies
            movieList={movieList}
              handleAddMovie={handleAddMovie}
            />
          }
        ></Route>

        <Route path="/sign-in" exact element={<SignIn/>}></Route>
        <Route path="/about-us" exact element={<AboutUs />}></Route>


        <Route
          path="/favourites"
          exact
          element={
            <Favourites
              favouriteItems={favouriteItems}
              handleAddMovie={handleAddMovie}
              handleRemoveMovie={handleRemoveMovie}
              handleFavouriteClearance={handleFavouriteClearance}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Myroutes;
