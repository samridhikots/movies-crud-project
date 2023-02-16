import React, { useState } from "react";

function AboutUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      alert("Logged In Successfully!");
    } else return alert("Email or password is incorrect");
  }

  return (
    <div style={{ position: "absolute", top: "12%", left: "5%", right: "5%" }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div
              class="card"
              style={{
                borderRadius: "1rem",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              <div class="row g-0">
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit} action="/">
                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img
                          src="https://preview.webpixels.io/web/img/logos/clever-light.svg"
                          class="h-8"
                          alt="..."
                        />
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{
                          borderRadius: "letter-spacing: 1px",
                          color: "white",
                        }}
                      >
                        Sign into your account
                      </h5>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          class="form-control form-control-lg"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label class="form-label" for="email">
                          Email address
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          class="form-control form-control-lg"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label class="form-label" for="password">
                          Password
                        </label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button
                          class="btn btn-dark btn-lg btn-block"
                          type="submit"
                          disabled={!validateForm()}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://wallpapercave.com/dwp2x/wp11872237.jpg"
                    alt="login form"
                    class="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
