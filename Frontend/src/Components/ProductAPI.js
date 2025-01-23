// ProductAPI.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Style/style.css';
import Section from './Section';
import Newletter from './Newletter';
import { CartContext } from './Cart/CartContext';

function ProductAPI() {
  const { addToCart } = useContext(CartContext);

  // Example product data
  const products = [
    {
      id: 1,
      name: 'Boxy Fit Premium quality Hoodie',
      price: 26.0,
      image: './img/product01.png',
      category: '2 zipper hoodie',
    },
    {
      id: 2,
      name: 'Stussy spider Hoodie',
      price: 14.0,
      image: './img/product02.png',
      category: 'Stussy spider Hoodie 🕸️🕷️',
    },
    {
      id: 3,
      name: 'Balaclava zipper Hoodie',
      price: 28.0,
      image: './img/product03.png',
      category: 'New deal 🙌',
    },
    {
      id: 4,
      name: 'VLONE SAKURA HOODIE',
      price: 14.0,
      image: './img/product04.png',
      category: 'VLONE SAKURA HOODIE 🌸',
    },
    {
      id: 5,
      name: 'Family 8 ball hoodie',
      price: 14.0,
      image: './img/product05.png',
      category: 'Family 8 ball hoodie 🎱👻',
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
                  <li className="active">
                    <a data-toggle="tab" href="#tab1">Hoodie</a>
                  </li>
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
                              {/* <Link to="/quick-view">
                              <i className="fa fa-eye" />
                              </Link> */}
                               <i className="fa fa-eye" />
                              <span className="tooltipp">quick view</span>
                            </button>
                          </div>
                        </div>
                        <div className="add-to-cart">
                          <button
                            className="add-to-cart-btn"
                            onClick={() => addToCart(product)}
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

export default ProductAPI;



// // ProductAPI.js
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Style/style.css';
// import Section from './Section';
// import Newletter from './Newletter';
// import { CartContext } from './Cart/CartContext';

// function ProductAPI() {
//   const { addToCart } = useContext(CartContext);

//   // Example product data
//   const products = [
//     {
//       id: 1,
//       name: 'Boxy Fit Premium quality Hoodie',
//       price: 26.0,
//       image: './img/product01.png',
//       category: '2 zipper hoodie',
//     },
//     {
//       id: 2,
//       name: 'Stussy spider Hoodie',
//       price: 14.0,
//       image: './img/product02.png',
//       category: 'Stussy spider Hoodie 🕸️🕷️',
//     },
//     {
//       id: 3,
//       name: 'Balaclava zipper Hoodie',
//       price: 28.0,
//       image: './img/product03.png',
//       category: 'New deal 🙌',
//     },
//     {
//       id: 4,
//       name: 'VLONE SAKURA HOODIE',
//       price: 14.0,
//       image: './img/product04.png',
//       category: 'VLONE SAKURA HOODIE 🌸',
//     },
//     {
//       id: 5,
//       name: 'Family 8 ball hoodie',
//       price: 14.0,
//       image: './img/product05.png',
//       category: 'Family 8 ball hoodie 🎱👻',
//     },
//   ];

//   return (
//     <div className="section">
//       <Section />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="section-title">
//               <h3 className="title">TARGET STORE</h3>
//               <div className="section-nav">
//                 <ul className="section-tab-nav tab-nav">
//                   <li className="active">
//                     <a data-toggle="tab" href="#tab1">Hoodie</a>
//                   </li>
//                   <li><Link to="/t-shirt">T-Shirt</Link></li>
//                   <li><Link to="/stussy-cap">Stussy-Cap</Link></li>
//                   <li><Link to="/sweat-shorts">Sweat-Shorts</Link></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-12">
//             <div className="row">
//               <div className="products-tabs">
//                 <div id="tab1" className="tab-pane active">
//                   <div className="products-slick" data-nav="#slick-nav-1">
//                     {/* Map through products and render each product */}
//                     {products.map((product) => (
//                       <div key={product.id} className="product">
//                         <div className="product-img">
//                           <img src={product.image} alt={product.name} />
//                         </div>
//                         <div className="product-body">
//                           <p className="product-category">{product.category}</p>
//                           <h3 className="product-name">
//                             <a href="#">{product.name}</a>
//                           </h3>
//                           <h4 className="product-price">${product.price.toFixed(2)}</h4>
//                           <div className="product-rating">
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                             <i className="fa fa-star" />
//                           </div>
//                           <div className="product-btns">
//                             <button className="add-to-wishlist">
//                               <i className="fa fa-heart-o" />
//                               <span className="tooltipp">add to wishlist</span>
//                             </button>
//                             <button className="add-to-compare">
//                               <i className="fa fa-exchange" />
//                               <span className="tooltipp">add to compare</span>
//                             </button>
//                             <button className="quick-view">
//                               <i className="fa fa-eye" />
//                               <span className="tooltipp">quick view</span>
//                             </button>
//                           </div>
//                         </div>
//                         <div className="add-to-cart">
//                           <button
//                             className="add-to-cart-btn"
//                             onClick={() => addToCart(product, 'M', 1)} // Default size 'M' and quantity 1
//                           >
//                             <i className="fa fa-shopping-cart" /> Add to Cart
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div id="slick-nav-1" className="products-slick-nav" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Newletter />
//     </div>
//   );
// }

// export default ProductAPI;