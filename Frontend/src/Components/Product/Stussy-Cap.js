import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import Section from '../Section';
import Newletter from '../Newletter';
import { CartContext } from '../Cart/CartContext'; // Import CartContext

function StussyCap() {
  const { addToCart } = useContext(CartContext); // Use CartContext

  // Example product data for Stussy Caps
  const products = [
    {
      id: 15,
      name: 'Green Baseball cap Stussy',
      price: 10.0,
      image: './img/StussyCap.jpg',
      category: 'StussyCap',
    },
    {
      id: 16,
      name: 'Stock Low Pro Cap in Cream',
      price: 10.0,
      image: './img/StussyCap01.webp',
      category: 'StussyCap',
    },
    {
      id: 17,
      name: 'Stussy cap on sale low pro',
      price: 10.0,
      image: './img/StussyCAp02.webp',
      category: 'StussyCap',
    },
    {
      id: 18,
      name: 'Stussy Strapback Cap',
      price: 10.0,
      image: './img/StussyCap03.jpg',
      category: 'StussyCap',
    },
    {
      id: 19,
      name: "Stüssy Men's Basic Strapback Baseball Cap in Blue",
      price: 10.0,
      image: './img/StussyCap04.webp',
      category: 'StussyCap',
    },
  ];

  return (
    <div className="section">
      <Section />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">TARGET STORE</h3>
              <div className="section-nav">
                <ul className="section-tab-nav tab-nav">
                  <li><Link to="/hoodie">Hoodie</Link></li>
                  <li><Link to="/t-shirt">T-Shirt</Link></li>
                  <li><a data-toggle="tab" href="#tab1">Stussy-Cap</a></li>
                  <li><Link to="/sweat-shorts">Sweat-Shorts</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="products-tabs">
                <div id="tab1" className="tab-pane active">
                  <div className="products-slick" data-nav="#slick-nav-1">
                    {/* Map through products and render each product */}
                    {products.map((product) => (
                      <div key={product.id} className="product">
                        <div className="product-img">
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h3 className="product-name">
                            <a href="#">{product.name}</a>
                          </h3>
                          <h4 className="product-price">${product.price.toFixed(2)}</h4>
                          <div className="product-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="product-btns">
                            <button className="add-to-wishlist">
                              <i className="fa fa-heart-o" />
                              <span className="tooltipp">add to wishlist</span>
                            </button>
                            <button className="add-to-compare">
                              <i className="fa fa-exchange" />
                              <span className="tooltipp">add to compare</span>
                            </button>
                            <button className="quick-view">
                              <i className="fa fa-eye" />
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)} // Use addToCart from CartContext
                          >
                            <i className="fa fa-shopping-cart" /> add to cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="slick-nav-1" className="products-slick-nav" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newletter />
    </div>
  );
}

export default StussyCap;