import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import Section from '../Section';
import Newletter from '../Newletter';
import { CartContext } from '../Cart/CartContext'; // Import CartContext

function SweatShorts() {
  const { addToCart } = useContext(CartContext); // Use CartContext

  // Example product data for Sweat Shorts
  const products = [
    {
      id: 11,
      name: 'Thank you for your interested 🙏🏻💖 Will be back soon 🔜',
      price: 12.0,
      image: './img/Sweatshort01.jpg',
      category: 'SweatShorts',
    },
    {
      id: 12,
      name: 'This fit on 🔝 🚀🔥',
      price: 12.0,
      image: './img/Sweatshort02.jpg',
      category: 'SweatShorts',
    },
    {
      id: 13,
      name: 'Fear of God Essentials Sweat shorts 🩳',
      price: 10.0,
      image: './img/Sweatshort03.jpg',
      category: 'SweatShorts',
    },
    {
      id: 14,
      name: 'SweatShorts',
      price: 10.0,
      image: './img/Sweatshort04.webp',
      category: 'SweatShorts',
    },
    {
      id: 5,
      name: 'Sweatshort',
      price: 10.0,
      image: './img/Sweatshort05.webp',
      category: 'Sweatshort',
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
                  <li><Link to="/stussy-cap">Stussy-Cap</Link></li>
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

export default SweatShorts;