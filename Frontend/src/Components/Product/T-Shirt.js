import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css';
import Section from '../Section';
import Newletter from '../Newletter';
import { CartContext } from '../Cart/CartContext'; // Import CartContext

function TShirt() {
  const { addToCart } = useContext(CartContext); // Use CartContext

  // Example product data for T-Shirts
  const products = [
    {
      id: 6,
      name: 'Ferrari 🐎🐎🐎 - polo tee (navy blue, red, white, black) Size M L XL',
      price: 12.0,
      image: './img/product06.jpg',
      category: 'Ferrari 🐎🐎🐎',
    },
    {
      id: 7,
      name: 'Essentials Tee pink pink 💖💖',
      price: 12.0,
      image: './img/product07.jpg',
      category: 'Essentials Tee pink pink 💖💖',
    },
    {
      id: 8,
      name: 'FUCK FAKE FRIENDS 👄 - Form boxy fit ❄️',
      price: 13.0,
      image: './img/product08.jpg',
      category: 'FUCK FAKE FRIENDS 👄',
    },
    {
      id: 9,
      name: 'ITS TIME FOR 🫦 - Boxy fit 100% cotton 250 gsm ❄️',
      price: 14.0,
      image: './img/product09.jpg',
      category: 'ITS TIME FOR 🫦',
    },
    {
      id: 10,
      name: 'Stussy x Nike ✨🎱 - Available M L XL',
      price: 13.0,
      image: './img/product10.jpg',
      category: 'Stussy x Nike ✨🎱',
    },
  ];

  return (
    <div>
      <Section />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h3 className="title">TARGET STORE</h3>
                <div className="section-nav">
                  <ul className="section-tab-nav tab-nav">
                    <li><Link to="/hoodie">Hoodie</Link></li>
                    <li><a data-toggle="tab" href="#tab1">T-Shirt</a></li>
                    <li><Link to="/stussy-cap">Stussy-Cap</Link></li>
                    <li><Link to="/sweat-shorts">Sweat-Shorts</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="products-tabs">
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="products-slick" data-nav="#slick-nav-2">
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
                    <div id="slick-nav-2" className="products-slick-nav" />
                  </div>
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

export default TShirt;