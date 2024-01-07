/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import footerJohn from "../images/john/footer.jpg";
import footerJohnCropped from "../images/john/footer-cropped.jpg";
import email from "../images/icons/email.svg";
import phone from "../images/icons/phone.svg";
import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";

function footer() {
  return (
    <footer>
      <div className="footer-text-container">
        <h1 className="footer-header">Contact Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
          sapien et turpis varius lobortis ut eu est.
        </p>
        <p>777 Lucky Street, Cooliopolis, NY, US</p>
        <div className="footer-contact">
          <img src={email} alt="" className="icon" />
          <p>johnpork@coolmail.com</p>
        </div>
        <div className="footer-contact">
          <img src={phone} alt="" className="icon" />
          <p>johnpork@coolmail.com</p>
        </div>
        <p>
          Social media icons from <a href="https://icons8.com/">icons8.com</a>
        </p>
        <div className="footer-social-media-link-container">
          <a href="https://www.facebook.com/johnporkrock/">
            <img src={facebook} alt="Facebook" className="icon" />
          </a>
          <a href="https://www.instagram.com/john.pork/">
            <img src={instagram} alt="Instagram" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/john-pork-834047281?trk=people-guest_people_search-card">
            <img src={linkedin} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
      <img src={footerJohn} alt="" id="footer-john" />
      <img src={footerJohnCropped} alt="" id="footer-john-cropped" />
    </footer>
  );
}

export default footer;
