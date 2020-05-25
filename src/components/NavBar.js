import React from "react";

function NavBar() {
  return (
    <header className="fixed-top">
      <div className="container-fluid container-fluid-max p-0">
        <nav
          id="navbar"
          className="navbar navbar-dark bg-dark"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
        <a href="/" className="navbar-brand">
          Tea!
        </a>
          <div className="d-flex justify-content-end w-fill">
            <a href="/tea" className="btn btn-dark">
              Learn
            </a>
            <a href="/posts" className="btn btn-dark">
              Posts
            </a>
          <button className="btn btn-outline-light">Login</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
