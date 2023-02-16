import { Link } from "react-router-dom";
import "./Movies.css";
import heart from "../../../images/heartFilled.png";
function Movies({ movieList, handleAddMovie }) {
  return (
    <div
      className="container"
      style={{
        position: "absolute",
        top: "120px",
        left: "5%",
        right: "5%",
        color: "black",
      }}
    >
      <div className="row">
        {movieList.map((movieItem) => (
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="card" style={{ height: 280 }}>
              <div className="view overlay">
                <a href={movieItem.link} target={"_blank"}>
                  <img
                    className="card-img-top"
                    src={movieItem.imgsrc}
                    alt={movieItem.title}
                    height="150"
                  />
                </a>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12 col-xl-12">
                    <h4 className="card-title title">{movieItem.title}</h4>
                    <div className="row">
                      <div className="col-md-8 col-sm-8 col-xs-12">
                        <p className="card-text category">
                          {movieItem.category}
                        </p>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        <p className="card-text price">
                          {" "}
                          Rs. {movieItem.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    class="custom-btn btn-fav col-md-3 col-sm-3 col-xs-3"
                    onClick={() => handleAddMovie(movieItem)}
                  >
                    <span> Cick!</span>
                    <span> Add to favourites</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
