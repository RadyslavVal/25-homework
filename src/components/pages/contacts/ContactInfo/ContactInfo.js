import React from 'react';
import '../Contact/Contact.css';
import '../Contact/Contact.css';
import { Link } from "react-router-dom";


const ContactInfo = ({ data }) => {
    const { firstName, lastName, phone, gender, description } = data;
    return (
        <div className='contactInfo'>
            <div className="card mb-3">
                <h3 className="card-header">{firstName} {lastName}</h3>
                <div className="card-body contactInfoPhone">
                    <h4 >{phone}</h4>
                    <h6 className="card-subtitle text-muted">Gender: {gender}</h6>
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <Link className='nav-link btn btn-info' to="/contacts"><span className='backBtn'>back</span></Link>
            </div>
        </div>
    );
}

export default ContactInfo;
