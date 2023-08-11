import React from 'react';
import './payment.css'; // Make sure to have your CSS file named accordingly

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-form">
        <h1>Complete Payment</h1>
        <p>Enter your credit or debit card details below</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Card Number" className="input-with-space" />
            <input type="text" placeholder="Date" className="input-small" />
            <input type="text" placeholder="CVV" className="input-small" />
          </div>
          <button type="button" className="confirm-button">Confirm Payment</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <h3>Plan Name:</h3>
          <p>Premium</p>
        </div>
        <div className="summary-item">
          <h3>Billing Cycle:</h3>
          <p>Monthly</p>
        </div>
        <div className="summary-item">
          <h3>Plan Price:</h3>
          <p>₹ 649</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
