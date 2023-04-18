import React from "react";
import { Link, useLocation } from "react-router-dom";
function Navigation(props) {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-light comp"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://media.licdn.com/dms/image/D560BAQG0s1-1ZaCpOg/company-logo_200_200/0/1665642464301?e=2147483647&v=beta&t=VyTZZBmONApgK8UDQ7L1pejBVEWroFdQbDER9-4s9uQ"
            style={{ width: "60px", height: "60px" }}
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Reports
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Documents
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/noti"
                style={{ color: "black" }}
                state={{ from: props.warn }}
              >
                Notifications
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/mapp"
                style={{ color: "black" }}
                state={{ from: props.senee }}
              >
                Map
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link"
                to="/help"
                style={{ color: "black" }}
                state={{ from: props.senee }}
              >
                Help
              </Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <li
              class="nav-item"
              style={{
                fontWeight: "bolder",
                fontSize: "20px",
                paddingRight: "10px",
              }}
            >
              PULSE METER
            </li>
            <button class="btn btn-outline-danger" type="submit">
              SignOut
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
