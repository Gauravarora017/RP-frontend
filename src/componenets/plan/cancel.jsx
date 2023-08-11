import React from 'react';
import './plan.css';

function PlanScreen() {
    return (
        <div className="container">
            <div className="head">
                <div className="header">
                    <h2>Current Plan Details</h2>
                    <span className="cancel-sign">&nbsp;&nbsp;Cancelled</span>
                </div>
                
                {/* <div className="cancel-button">
                    <button className="cancel-btn">Cancel</button>
                </div> */}
            </div>
            
            <div className="plan_name">Basic</div>
            <div className="devices">Phone + Tablet</div>
            <div className="plan_price">2,000/yr</div>

            <div className="change_plan">
                <button className="change_plan_btn">Choose Plan</button>
            </div>
                
            <p>Your subscription was cancelled and you will lose access to services on Jul 11th, 2023</p>
        </div>
    );
}

export default PlanScreen;
