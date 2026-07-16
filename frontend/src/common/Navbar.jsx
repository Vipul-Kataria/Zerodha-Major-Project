import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary bg-light border"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="/media/logo.svg"
              alt="logo.svg"
              style={{ width: "30%" }}
              className="mx-5"
            />
          </Link>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form action="" className="m-2" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" className="mx-2">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  SignUp
                </Link>
              </li>
              <li class="nav-item" className="mx-3">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item" className="mx-3">
                <Link class="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item" className="mx-3">
                <Link class="nav-link" to="/pricing">
                  Price
                </Link>
              </li>
              <li class="nav-item" className="mx-3">
                <Link class="nav-link" to="#">
                  <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
