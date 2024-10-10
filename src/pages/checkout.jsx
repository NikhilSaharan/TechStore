/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pay from '../assets/images/pay/pay.png';
import { ShopContext } from '../components/shopcontext';

const Checkout = () => {
  const { getTotalCartProducts, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [selectedState, setSelectedState] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handlePay = (e) => {
    e.preventDefault();

    // Check if there are items in the cart
    if (totalProducts === 0) {
      setErrorMessage('Please select items to proceed.');
      return;
    }

    // Check for empty fields
    const form = e.target;
    const inputs = form.querySelectorAll('input, select');
    for (let input of inputs) {
      if (!input.value) {
        setErrorMessage('Please fill all fields.');
        return;
      }
    }

    console.log('Proceeding to payment...');
    clearCart(); // Resetting the cart using the correct function
    console.log('Cart reset. Navigating to confirmation page...');
    navigate('/order-confirmation');
  };

  return (
    <section className="checkout p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4 fs-3">Payment Method</h1>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={() => setPaymentMethod('creditCard')}
              />
              <label className="form-check-label" htmlFor="creditCard">
                Credit Card
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <label className="form-check-label" htmlFor="cod">
                Cash on Delivery
              </label>
            </div>

            {paymentMethod === 'creditCard' && (
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header p-0" id="headingOne">
                    <button
                      className="btn col-12 btn-light btn-block text-start p-3 rounded-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="col-6">
                          <span>Credit Card</span>
                        </div>
                        <div className="icons col-6">
                          <img src={pay} alt="" className='img-fluid' />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="card-body payment-card-body">
                      <span className="font-weight-normal card-text">Card Number</span>
                      <div className="input mb-4">
                        <i className="fa fa-credit-card"></i>
                        <input type="text" className="form-control" placeholder="0000 0000 0000 0000" required />
                      </div>
                      <div className="row mt-3 mb-3">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">Expiry Date</span>
                          <div className="input">
                            <i className="fa fa-calendar"></i>
                            <input type="text" className="form-control" placeholder="MM/YY" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">CVC/CVV</span>
                          <div className="input mb-4">
                            <i className="fa fa-lock"></i>
                            <input type="text" className="form-control" placeholder="000" required />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted certificate-text">
                        <i className="fa fa-lock"></i> Your transaction is secured with SSL certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="col-md-6 p-2">
            <h1 className="mt-3 mb-3 fs-3">Fill the following details for shipping.</h1>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <form className="row g-3 mb-3" onSubmit={handlePay}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="inputMobile" placeholder="1234567890" required />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select" value={selectedState} onChange={(e) => setSelectedState(e.target.value)} required>
                  <option value="">Choose...</option>
                  <option value="state1">Haryana</option>
                  <option value="state2">Rajasthan</option>
                  <option value="state3">Delhi</option>
                  <option value="state4">Goa</option>
                  <option value="state5">Gujarat</option>
                  <option value="state6">Bihar</option>
                  <option value="state7">Uttar Pradesh</option>
                  <option value="state8">Jharkhand</option>
                  <option value="state9">Punjab</option>
                  <option value="state10">Chandigarh</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip" required />
              </div>
              <div className="col-12 mt-5">
                <button id="button-linker" type="submit">Proceed To Pay</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
