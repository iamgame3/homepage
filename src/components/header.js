/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import headerJohn from "../images/john/header.jpg";
import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import linkedin from "../images/icons/linkedin.svg";

function header() {
  return (
    <header>
      <figure className="header-image-container">
        <img src={headerJohn} alt="" id="header-john" />
        <figcaption className="header-image-caption">John Pork</figcaption>
      </figure>
      <div className="header-text-container">
        <h1 className="header-title">About Me</h1>
        <p className="header-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
          sapien et turpis varius lobortis ut eu est. Donec facilisis nunc a
          commodo laoreet. Etiam porta iaculis nunc, a varius tortor. Praesent
          vel massa at purus gravida ultricies eu rhoncus risus. Phasellus
          vulputate, odio a sodales tempus, ex lectus euismod ante, vel mollis
          purus mauris sed eros. Vestibulum ultrices lobortis egestas. Morbi
          elementum posuere urna, id imperdiet metus.
        </p>
        <div className="social-media-link-container">
          <a href="https://www.facebook.com/johnporkrock/">
            <img src={facebook} alt="Facebook" className="big-icon" />
          </a>
          <a href="https://www.instagram.com/john.pork/">
            <img src={instagram} alt="Instagram" className="big-icon" />
          </a>
          <a href="https://www.linkedin.com/in/john-pork-834047281?trk=people-guest_people_search-card">
            <img src={linkedin} alt="LinkedIn" className="big-icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default header;
