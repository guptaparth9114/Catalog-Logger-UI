import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer>
      {/* Quick Links Section */}
      <div>
        <h6>Quick Links</h6>
        <ul>
          <li>
            <a href="https://main--catlog-logger.netlify.app/">Home</a>
          </li>
          <li>
            <a href="https://main--catlog-logger.netlify.app/">About Us</a>
          </li>
          <li>
            <a href="https://main--catlog-logger.netlify.app/">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Other Pages Section */}
      <div>
        <h6>Other Pages</h6>
        <ul>
          <li>
            <a href="https://main--catlog-logger.netlify.app/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://main--catlog-logger.netlify.app/">
              Terms and Conditions
            </a>
          </li>
        </ul>
      </div>

      {/* Get In Touch Section */}
      <div>
        <h6>Get In Touch</h6>
        <p>198/30 Ramesh Market East of Kailash New Delhi 110065</p>
        <ul>
          <li>
            <a href="guptaparth9114@gmail.com">
              Email: guptaparth9114@gmail.com
            </a>
          </li>
          <li>
            <a href="">Phone: 9999999999</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
