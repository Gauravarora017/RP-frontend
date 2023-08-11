import React from 'react';
import './plan.css';

function PlanScreen() {
    return (
        <div className="container">
            <div className="head">
                <div className="header">
                    <h2>Current Plan Details</h2>
                    <span className="active-sign">&nbsp;&nbsp;Active</span>
                </div>
                
                <div className="cancel-button">
                    <button id="cancelBtn" className="cancel-btn">Cancel</button>
                </div>
            </div>
            
            <div className="plan_name">Basic</div>
            <div className="devices">Phone + Tablet</div>
            <div className="plan_price">2,000/yr</div>

            <div className="change_plan">
                <button className="change_plan_btn">Change Plan</button>
            </div>
                
            <p>Your subscription has started on Jul 11th, 2022 and will auto renew on Jul 12th, 2023</p>
        </div>
    );
}

export default PlanScreen;
