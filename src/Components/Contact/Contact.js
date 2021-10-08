import React from 'react';
import Footer from '../Footer/Footer';
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="col contact-col ">
                    <h2>Office Address</h2>
                    <p>1-13 St Giles High St,</p>
                    <p>London WC2H 8AG, UK</p>
                    </div>
                    <div className="col contact-col">
                    <h2>Email Address</h2>
                    <p>companyinfo@gmail.com</p>
                    <p>info@gmail.com</p>
                    </div>
                    <div className="col contact-col">
                    <h2>Office Time</h2>
                    <p>Mon - Sat 9:00 - 5:00</p>
                    <p>Sunday - Closed</p>
                    </div>
                    
                </div>
                </div>
        </div>
    );
};

export default Contact;