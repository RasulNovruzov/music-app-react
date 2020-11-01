import React from 'react';
import contact from '../../assets/video/contact.mp4';
import './contact.css';

const Contact = () => {
    return (
        <div className="main">
                      
            <video src={contact} autoPlay loop muted id="myVideo"></video>
            <nav>
                <ul class="snip1143 yoyop">
                    <li class="current"><a href="/" data-hover="Home">Home</a></li>
                    <li><a href="#" data-hover="About Us">About Us</a></li>
                    <li><a href="/favorites" data-hover="FAVORITES">fAVORITES</a></li>
                    <li><a href="#" data-hover="Services">Services</a></li>
                    <li><a href="#" data-hover="Products">Products</a></li>
                    <li><a href="/contacts" data-hover="Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Contact;