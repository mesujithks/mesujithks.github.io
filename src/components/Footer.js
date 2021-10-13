import React from "react";

const Footer = () => {

  return (
    <footer className="footer">

        <a href="#" className="up-btn-wrapper" alt="Go to top">
            <i className="fa fa-angle-up up-btn"></i>
        </a>


        <div className="footer-icons">
            <a href="https://www.facebook.com/mesujithks" target="_blank" rel="noopener" alt="facebook">
                <i className="fa fa-facebook footer-i"></i>
            </a>
            <a href="https://www.twitter.com/mesujithks" target="_blank" rel="noopener" alt="twitter">
                <i className="fa fa-twitter  footer-i"></i>
            </a>

            <a href="https://linkedin.com/in/mesujithks/" target="_blank" rel="noopener" alt="linkedin">
                <i className="fa fa-linkedin footer-i"></i>
            </a>
            <a href="https://www.instagram.com/mesujithks" target="_blank" rel="noopener" alt="instagram">
                <i className="fa fa-instagram footer-i"></i>
            </a>
            <a href="https://www.github.com/mesujithks" target="_blank" rel="noopener" alt="github">
                <i className="fa fa-github footer-i"></i>
            </a>
        </div>


        <hr  width="100%" />

        <p>Made with ❤️ by Sujith K S</p>
        <p className="copyright">&copy; 2021 Sujith K S</p>


    </footer>
  );
};

export default Footer;
