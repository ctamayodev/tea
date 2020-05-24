import React from "react";

function NavBar() {
  return (
    <header className="fixed-top">
      <div className="container-fluid container-fluid-max p-0">
        <nav
          id="navbar"
          className="navbar navbar-dark bg-dark"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }}
        >
          <a className="navbar-brand">Tea!</a>
          <button className="btn btn-dark">Login</button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;