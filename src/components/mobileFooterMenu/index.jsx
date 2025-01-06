import './index.scss';
import { Link } from "react-router-dom";
import { MdExplore, MdMiscellaneousServices } from "react-icons/md";
import {FaDiagramProject} from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";
import { TbWriting } from "react-icons/tb";
import { BiCertification } from 'react-icons/bi';


const MobileFooterMenu = () => {
    return (
        <div className="mobile_footer_menu">
            <div className="mobile_footer_menu__wrapper">
                <Link to="/" className="mobile_footer_menu__item">
                    <MdExplore />
                    <span className='sidebar__nav-text'>
                        Explore
                    </span>
                </Link>
                <Link to="/projects">
                    <FaDiagramProject />
                    <span className='sidebar__nav-text'>
                        Work
                    </span>
                </Link>
                <Link to="/services">
                    <MdMiscellaneousServices />
                    <span className='sidebar__nav-text'>
                        Services
                    </span>
                </Link>
                <Link to="/about">
                    <ImProfile />
                    <span className='sidebar__nav-text'>
                        About
                    </span>
                </Link>
                <Link to="/skills">
                    <GiSkills />
                    <span className='sidebar__nav-text'>
                        Skills
                    </span>
                </Link>
                <Link to="/blog">
                    <TbWriting />
                    <span className='sidebar__nav-text'>
                        Blog
                    </span>
                </Link>
                <Link to="/certifications">
                    <BiCertification />
                    <span className='sidebar__nav-text'>
                        Certifications
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default MobileFooterMenu;