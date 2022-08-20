import React from 'react';
import './Contact.css';
import male from '../image/male.png';
import female from '../image/female.png';
import question from '../image/question.png';
import { Link } from "react-router-dom";


const Contact = ({ data }) => {
    const { firstName, lastName, phone, gender } = data;
    return (
        <Link className="nav-link" to={`/contacts/${firstName}${lastName}`}>
            <div className="contact">
                <div className="contact-gender">
                    <img src={gender === 'male' ? male : gender === 'female' ? female : question} alt="Gender" />
                </div>
                <div className='contact-info'>
                    <div className="contact-name">
                        <div className="contact-firstName">{firstName}</div>
                        <div className="contact-lastName">{lastName}</div>
                    </div>
                    <div className="contact-phone">{phone}</div>
                </div>
            </div >
        </Link>
    );
}

export default Contact;