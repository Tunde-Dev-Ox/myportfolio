import './index.scss';
import { Link } from "react-router-dom";

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
            <div className="mobile__hamburger">
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
            </div>
        </div>
    )
}

export default MobileHeader;