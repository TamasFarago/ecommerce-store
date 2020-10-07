import React from 'react'
import "../styles/Contact.css"
import { FaPhoneAlt, FaComments } from "react-icons/fa"

export default function Contact() {
    return (
        <section className="contact">
            
                <div className="contact-hero">
                    <div className="contact-hero-text">
                        <h3>get in touch</h3>
                        <p>Want to get in touch? We’d love to hear from you. Here’s how you can reach us…</p>
                    </div>
                </div>
                <div className="contact-container">
                        <div className="contact-grid">
                            <div className="contact-grid-content1">
                                <div className="contact-grid-inner">
                                    <FaPhoneAlt className="phone"/>
                                    <h5>Talk to sales</h5>
                                    <p>Interested in our hosting? Just pick up the phone and call us.</p>
                                    <button>202-555-0127</button>
                                </div>
                            </div>
                            <div className="contact-grid-content2">
                                <div className="contact-grid-inner">
                                    <FaComments className="chat"/>
                                    <h5>Contact support</h5>
                                    <p>Sometimes you need a little help. Don’t worry, We’re here for you.</p>
                                    <button>CONTACT SUPPORT</button>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h5>Ask a question</h5>
                            <hr className="contact-hr"/>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Your name (required)</label>
                                    <input type="text" className="form-input-name" id="name" required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email (required)</label>
                                    <input type="email" className="form-input-email" id="email" required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-input-subject" id="subject" ></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textarea">Your Message</label>
                                    <textarea type="text" className="form-input-text" id="textarea" rows="6"></textarea>
                               </div>
                               <div className="form-group">
                               <button className="btn-send" type="submit" value="submit">Send</button>
                               </div>
                            </form>
                        </div>
                        
                    </div>
            
        </section>
    )
}

