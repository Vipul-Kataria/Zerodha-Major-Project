import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary bg-light border"
        style={{ backgroundColor: "#FFF" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/media/logo.svg"
              alt="logo.svg"
              style={{ width: "30%" }}
              className="mx-5"
            />
          </a>
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
                <a class="nav-link active" aria-current="page" href="#">
                  SignUp
                </a>
              </li>
              <li class="nav-item" className="mx-3">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item" className="mx-3">
                <a class="nav-link" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item" className="mx-3">
                <a class="nav-link" href="#">
                  Price
                </a>
              </li>
              <li class="nav-item" className="mx-3">
                <a class="nav-link" href="#">
                  <i class="fa-solid fa-bars"></i>
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
