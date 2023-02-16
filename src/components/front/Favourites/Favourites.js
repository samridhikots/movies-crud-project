import "./Favourites.css";

const Favourites = ({
  favouriteItems,
  handleAddMovie,
  handleRemoveMovie,
  handleFavouriteClearance,
}) => {
  const totalPrice = favouriteItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <div
        class="container h-100 py-5"
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          right: "5%",
          color: "black",
        }}
      >
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-10">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="card rounded-3 mt-0 mb-4">
                <div class="card-body p-4">
                  <div
                    className="mt-2"
                    style={{
                      display: "inline",
                      position: "absolute",
                      left: "82%",
                      top: "1%",
                    }}
                  >
                    {favouriteItems.length >= 1 && (
                      <button
                        type="button"
                        onClick={handleFavouriteClearance}
                        class="btn-sm me-1 mb-2 favourite-btn"
                        data-mdb-toggle="tooltip"
                        title="Remove item"
                      >
                        <i class="fas fa-trash"> Clear favourites</i>
                      </button>
                    )}
                  </div>

                  {favouriteItems.length === 0 && (
                    <div>No movies are added.</div>
                  )}

                  <div class="row mt-4 mb-2 d-flex justify-content-between align-items-center">
                    {favouriteItems.map((item) => (
                      <>
                        <div
                          key={item.id}
                          class="col-md-3 col-lg-3 col-xl-3 mb-3"
                        >
                          <img
                            src={item.imgsrc}
                            class="img-fluid rounded-3"
                            alt={item.title}
                          />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <p
                            class="lead fw-normal mb-2"
                            style={{ fontSize: "medium" }}
                          >
                            {item.title}
                          </p>
                          <p>
                            <span
                              class="text-muted"
                              style={{ fontSize: "small" }}
                            >
                              Category:{" "}
                            </span>
                            <span style={{ fontSize: "small" }}>
                              {" "}
                              {item.category}{" "}
                            </span>
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="favourite-btn"
                            onClick={() => handleAddMovie(item)}
                          >
                            +
                          </button>
                          {/* <h5 class="mb-0">
                          {item.quantity}
                        </h5> */}
                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            type="number"
                            class="form-control form-control-sm"
                          />
                          <button
                            className="favourite-btn"
                            onClick={() => handleRemoveMovie(item)}
                          >
                            -
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">
                            {item.quantity} * Rs. {item.price}
                          </h6>
                        </div>
                        <hr />
                      </>
                    ))}
                  </div>

                  <div
                    class="d-flex justify-content-between p-2 mt-4 mb-2"
                    style={{ backgroundColor: "#e1f5fe" }}
                  >
                    <h5 class="fw-bold mb-0">Total:</h5>
                    <h5 class="fw-bold mb-0">Rs. {totalPrice}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favourites;
