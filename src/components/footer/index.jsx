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
                                Built with 💓, Next JS, SCSS, and Contentful by <a href='https://x.com/__jot'>
                                    Joseph Tunde
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
    )
}

export default Footer;