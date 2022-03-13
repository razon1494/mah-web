import {
  faFacebook,
  faGoogle,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="">
      <div className="container header mx-auto  d-md-flex justify-content-between">
        <div className="icons">
          <FontAwesomeIcon className="header-icon" icon={faTwitter} />
          <FontAwesomeIcon className="header-icon" icon={faFacebook} />
          <FontAwesomeIcon className="header-icon" icon={faYoutube} />
          <FontAwesomeIcon className="header-icon" icon={faGoogle} />
        </div>
        <div className="address">
          <p>
            <FontAwesomeIcon className="" icon={faMapMarkerAlt} />
            <span className="fw-bold"> Address </span>H.C-S 2726, Noddapara
            <br /> Dakshin Khan, Dhaka 1230
          </p>
        </div>

        <div className="call-now">
          <a href="/call" className="call">
            <FontAwesomeIcon className="text-dark" icon={faPhoneVolume} />
            <span className="fw-bold text-dark"> Phone:</span> +88-01744-941494
          </a>
        </div>
        <div className="call-now">
          <p className="call">
            <FontAwesomeIcon className="text-dark" icon={faClock} />
            <span className="fw-bold text-dark"> Open Hours: </span> Mon-Sat 24
            Hours
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
