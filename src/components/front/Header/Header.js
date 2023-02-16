import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/netflix.png";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark px-0 py-3" style={{ backgroundColor: "#000" }}>
        <div class="container-xl">
          <a class="navbar-brand" href="/">
            <img
              src="https://preview.webpixels.io/web/img/logos/clever-light.svg"
              class="h-8"
              alt="..."
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-lg-auto">
              <Link to="/" class="nav-item nav-link active" aria-current="page">
                Movies
              </Link>
              <Link class="nav-item nav-link" to="/favourites">
                Favourites
              </Link>
              <Link class="nav-item nav-link" to="/about-us">
                About Us
              </Link>
              <Link class="nav-item nav-link" to="/sign-in">
                Sign In
              </Link>
            </div>

            <div class="navbar-nav ms-lg-4">
              <Link class="nav-item nav-link" to="/favourites">
                Favourites
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
