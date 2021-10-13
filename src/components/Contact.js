import React from "react";

const Contact = () => {

  return (
    <section className="section contact" id="contact">

        <h2>Contact Me</h2>

        <div className="contact-wrapper">

            <form name="contact" action="/message_send.html" className="contact-form" netlify-honeypot="bot-field"
                data-netlify="true">

                <h3 className="form-head">Send Me A Note</h3>

                <input required placeholder="Name" className="input" type="text" name="name" id="name" autocomplete="off" />


                <input required placeholder="Email Address" className="input" type="email" name="email" id="email"
                    autocomplete="off" />

                <input placeholder="Subject" className="input" type="text" name="subject" id="subject" autocomplete="off" />


                <textarea required placeholder="Your Message" name="message" className="input" id="message"></textarea>


                <button className="submit btn" type="submit">Send Mail</button>

            </form>

            <div className="contact-details">
                <div className="contact-container phone" onclick="window.open('tel:+919*********3');">
                    <div className="contact-icon">
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-info">
                        <a href="tel:+919*********3" className="contact-data">+91 9*********3</a>
                    </div>
                </div>

                <div className="contact-container mail-id" onclick="window.open('mailto:mesujithks3@gmail.com');">
                    <div className="contact-icon">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                        <a href="mailto:mesujithks3@gmail.com" className="contact-data">mesujithks3@gmail.com</a>
                    </div>
                </div>

                <div className="s-medias">
                    <h3 className="s-head">Catch Me On</h3>

                    <div className="social-media-pack">
                        <a id="facebook" href="https://www.facebook.com/mesujithks" target="_blank" rel="noopener"
                            alt="facebook">
                            <i className="fa fa-facebook contact-social"></i>
                        </a>
                        <a id="instagram" href="https://www.instagram.com/mesujithks" target="_blank" rel="noopener"
                            alt="instagram">
                            <i className="fa fa-instagram contact-social"></i>
                        </a>
                       {/*  <a id="whatsapp"
                            href="https://api.whatsapp.com/send?phone=&text=Hi%Sujith%20%F0%9F%91%8B"
                            target="_blank" rel="noopener" alt="whatsapp">
                            <i className="fa fa-whatsapp contact-social"></i>
                        </a> */}
                        <a id="twitter" href="https://www.twitter.com/mesujithks" target="_blank" rel="noopener"
                            alt="twitter">
                            <i className="fa fa-twitter  contact-social"></i>
                        </a>
                        <a id="telegram" id="telegram" href="https://telegram.me/mesujithks" target="_blank"
                            rel="noopener" alt="telegram">
                            <i className="fa fa-telegram contact-social"></i>
                        </a>
                        <a id="linkedin" href="https://linkedin.com/in/mesujithks/" target="_blank" rel="noopener"
                            alt="linkedin">
                            <i className="fa fa-linkedin contact-social"></i>
                        </a>
                        <a id="github" href="https://www.github.com/mesujithks" target="_blank" rel="noopener"
                            alt="github">
                            <i className="fa fa-github contact-social"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </section>
  );
};

export default Contact;
