import './index.scss';
import { Link } from "react-router-dom";
import { RiCalendarScheduleLine } from "react-icons/ri";

const MobileHeader = () => {
    return (
        <div className="mobile_header">
            <Link to="/" className="mobile_header__left">
                <figure>
                    <img src="https://josephtunde.tech/assets/images/tunde.jpg" alt="Logo" />
                </figure>
                <div className="mobile_header__content">
                    <h4>Joseph Tunde</h4>
                    <p>
                        Technical PM
                    </p>
                </div>
            </Link>
            <Link to="/" className="mobile__hamburger">
                <RiCalendarScheduleLine />
            </Link>
        </div>
    )
}

export default MobileHeader;