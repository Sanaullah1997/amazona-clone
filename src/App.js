//Fisrt Commit.
import React from 'react';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand-logo">
          <button onClick={openMenu}>
            ☰
      </button>
          <a href="#">Amazona</a></div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories.</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="pants.html">Pants</a>
          </li>
          <li>
            <a href="shirts.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/image1.jpg" alt="product" />
                <div className="product-name">
                  <a href="#">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.0 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All rights reserved.
  </footer>
    </div>

  );
}

export default App;
