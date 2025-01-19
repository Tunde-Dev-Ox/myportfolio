import { Link } from 'react-router-dom'
import './index.scss'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    let hours = date.getUTCHours() + 1;
    const isPM = hours >= 12;
    // hours = hours % 12 || 12; // Convert to 12-hour format
    const period = isPM ? 'PM' : 'AM';
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(hours < 10) {
        hours = `0${hours}`;
    }

    const available = hours > 0 && hours <= 6 ? 'sleeping 🛌' : 'working 💻';

    return (
        <div className="footer">
                    <div className="footer__wrapper">
                        <div className="footer__top">
                            <ul>
                                <li>
                                    <span>
                                        Index
                                    </span>
                                </li>
                                <li>
                                    <Link to="/">
                                        Explore
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects">
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>
                                        Work
                                    </span>
                                </li>
                                <li>
                                    <Link to="/">
                                        Brooi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Onbrela
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Lingroks
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>
                                        Connect
                                    </span>
                                </li>
                                <li>
                                    <Link to="mailto:iamjosephtunde@gmail.com">
                                        Email
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/josephtunde/">
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://x.com/__jot">
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://github.com/Tunde-Dev-Ox">
                                        GitHub
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="empty--div"></div>
                        <div className="footer__mid">
                            <div className="footer__mid-left">
                                <p>
                                    Currently <span>
                                        {available}
                                    </span>
                                </p>
                            </div>
                            <div className="footer__mid-right">
                                <p>
                                    {hours}:{minutes} {period}
                                </p>
                            </div>
                        </div>
                        <div className="empty--div"></div>
                        <div className="footer__bottom">
                            <p>
                                &copy; {year} Joseph Tunde
                            </p>
                            <span>
                                Built with 💓, React.js, SCSS, and Contentful by <Link to='https://x.com/__jot'>
                                    Joseph Tunde
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
    )
}

export default Footer;