import React from "react";
import CartWidget from "../CartWidget/CartWidget";


function NavBar(props){
  const algo = "backgroundColor: #e3f2fd;";
  return (
    
    <nav className="navbar navbar-expand-xl navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">RetroSports</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Camisetas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Pantalones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Ofertas</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
    
      
    
  );
}

export default NavBar;