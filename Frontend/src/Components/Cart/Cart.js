
import React, { useContext, useState } from 'react';
import './Cart.css';
import { CartContext } from './CartContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2canvas from 'html2canvas';
import khqrImage from '../KHQR/KHQR.png';

function Cart() {
  const { cartItems, removeFromCart, updateCartItem } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);
  const [isImageSubmitted, setIsImageSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 1.5;
  const total = subtotal + shipping;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setIsImageSubmitted(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = () => {
    if (!image) {
      toast.error('Please upload an image before submitting.');
      return;
    }
    setIsImageSubmitted(true);
    toast.success('Image submitted successfully!');
  };

  const handleCheckout = async () => {
    if (!name || !address || !phoneNumber || !gender) {
      toast.error('Please fill in your name, address, phone number, and gender before proceeding.');
      return;
    }

    if (!image || !isImageSubmitted) {
      toast.error('Please upload and submit an image before proceeding.');
      return;
    }

    setIsLoading(true);

    try {
      const invoiceData = {
        name,
        address,
        phoneNumber,
        gender,
        image,
        subtotal,
        shipping,
        total,
        items: cartItems,
      };

      const response = await axios.post('http://localhost:5000/api/invoice', invoiceData);
      if (response.status === 201) {
        toast.success('Invoice saved successfully!');
        generateInvoice();
      }
    } catch (error) {
      console.error('Error saving invoice:', error);
      toast.error('Failed to save invoice. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateInvoice = () => {
    const invoiceContent = `
      <div class="invoice-print" style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="text-align: center;">Invoice</h1>
        <hr />
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <hr />
        <h2>Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="border: 1px solid #000; padding: 8px;">Product</th>
              <th style="border: 1px solid #000; padding: 8px;">Size</th>
              <th style="border: 1px solid #000; padding: 8px;">Price</th>
              <th style="border: 1px solid #000; padding: 8px;">Quantity</th>
              <th style="border: 1px solid #000; padding: 8px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${cartItems
              .map(
                (item) => `
              <tr>
                <td style="border: 1px solid #000; padding: 8px;">${item.name}</td>
                <td style="border: 1px solid #000; padding: 8px;">${item.size}</td>
                <td style="border: 1px solid #000; padding: 8px;">$${item.price.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 8px;">${item.quantity}</td>
                <td style="border: 1px solid #000; padding: 8px;">$${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
        <hr />
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>Shipping:</strong> $${shipping.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        ${image && isImageSubmitted ? `<h2>Uploaded Image</h2><img src="${image}" alt="Uploaded" style="max-width: 100%; height: auto;" />` : ''}
      </div>
    `;

    const invoiceWindow = window.open('', '_blank');
    if (!invoiceWindow) {
      toast.error('Popup window blocked. Please allow popups for this site.');
      return;
    }

    invoiceWindow.document.write(invoiceContent);
    invoiceWindow.document.close();

    html2canvas(invoiceWindow.document.body)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
          toast.error('Popup window blocked. Please allow popups for this site.');
          return;
        }

        printWindow.document.write(`<img src="${imgData}" onload="window.print()" />`);
        printWindow.document.close();
      })
      .catch((error) => {
        console.error('Error generating invoice:', error);
        toast.error('Failed to generate invoice. Please try again.');
      });
  };

  const downloadInvoice = () => {
    const invoiceContent = `
      <div class="invoice-print" style="font-family: Arial, sans-serif; padding: 20px;">
        <h1 style="text-align: center;">Invoice</h1>
        <hr />
        <h2>Customer Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <hr />
        <h2>Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="border: 1px solid #000; padding: 8px;">Product</th>
              <th style="border: 1px solid #000; padding: 8px;">Size</th>
              <th style="border: 1px solid #000; padding: 8px;">Price</th>
              <th style="border: 1px solid #000; padding: 8px;">Quantity</th>
              <th style="border: 1px solid #000; padding: 8px;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${cartItems
              .map(
                (item) => `
              <tr>
                <td style="border: 1px solid #000; padding: 8px;">${item.name}</td>
                <td style="border: 1px solid #000; padding: 8px;">${item.size}</td>
                <td style="border: 1px solid #000; padding: 8px;">$${item.price.toFixed(2)}</td>
                <td style="border: 1px solid #000; padding: 8px;">${item.quantity}</td>
                <td style="border: 1px solid #000; padding: 8px;">$${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
        <hr />
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>Shipping:</strong> $${shipping.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
        ${image && isImageSubmitted ? `<h2>Uploaded Image</h2><img src="${image}" alt="Uploaded" style="max-width: 100%; height: auto;" />` : ''}
      </div>
    `;

    const invoiceWindow = window.open('', '_blank');
    if (!invoiceWindow) {
      toast.error('Popup window blocked. Please allow popups for this site.');
      return;
    }

    invoiceWindow.document.write(invoiceContent);
    invoiceWindow.document.close();

    html2canvas(invoiceWindow.document.body)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'invoice.png';
        link.click();
      })
      .catch((error) => {
        console.error('Error generating invoice:', error);
        toast.error('Failed to generate invoice. Please try again.');
      });
  };

  const handleSizeChange = (id, size) => {
    updateCartItem(id, { size });
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    updateCartItem(id, { quantity });
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      handleQuantityChange(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      handleQuantityChange(id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="size-selection">
                  <label>Size:</label>
                  <div className="size-buttons">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                      <React.Fragment key={size}>
                        <button
                          className={`size-button ${item.size === size ? 'active' : ''}`}
                          onClick={() => handleSizeChange(item.id, size)}
                        >
                          {size}
                        </button>
                        {index === 2 && <br />} {/* Add a line break after 'L' */}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="quantity-selection">
                  <label>Quantity:</label>
                  <div className="quantity-control">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
              <div className="item-total">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-details">
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: $1.50</p>
            <hr />
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>

          <div className="khqr-payment">
            <h3>KHQR Payment</h3>
            <img src={khqrImage} alt="KHQR" style={{ maxWidth: '200px', height: 'auto' }} />
          </div>

          <div className="checkout-form">
            <h3>Shipping Details</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender (Required)</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {image && (
                <div className="image-preview">
                  <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px', marginTop: '10px' }} />
                </div>
              )}
              <button
                className="submit-image-button"
                onClick={handleSubmitImage}
                disabled={!image || isImageSubmitted}
              >
                {isImageSubmitted ? 'Image Submitted' : 'Submit Image'}
              </button>
            </div>
          </div>

          <div className="cart-actions">
            <button
              className="checkout-button"
              onClick={handleCheckout}
              disabled={!name || !address || !phoneNumber || !gender || !image || !isImageSubmitted || isLoading}
            >
              {isLoading ? 'Processing...' : 'Proceed to Checkout'}
            </button>
            <button
              className="download-button"
              onClick={downloadInvoice}
              disabled={!name || !address || !phoneNumber || !gender || !image || !isImageSubmitted || isLoading}
            >
              Download Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;