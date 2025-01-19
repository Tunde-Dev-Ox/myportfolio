import './index.scss'
import {Helmet} from 'react-helmet-async';
import DashboardLayout from '../../components/DashboardLayout';
import { Link } from 'react-router-dom';


const Certifications = () => {
    return(
        <DashboardLayout>
            <Helmet>
                <title>
                    Joseph Tunde - Certifications
                </title>
            </Helmet>
            <div className="certifications">
                <h1 className="certifications_header">
                    Education
                </h1>
                <p className="certifications_subtitle">
                    A certified professional with a blend of technical and business skills.
                </p>
                <div className="education__card-wrapper">
                    <Link to="/" className="education__card">
                        <h4>
                            BA. Creative Arts
                        </h4>
                        <p>
                            University of Lagos
                        </p>
                        <span>
                            2025
                        </span>
                    </Link>
                </div>
                <div className="certifications_card__wrapper">
                    {/* <Link to="/" className="certifications_card">
                        <h4>
                            CAPM 
                        </h4>
                        <p>
                            Project Management Institute
                        </p>
                        <span>
                            2025
                        </span>
                    </Link> */}
                    <Link to="https://coursera.org/share/3c07f0c2133d85e778013d95c05420bb" className="certifications_card">
                        <h4>
                            Software Product Management
                        </h4>
                        <p>
                            University of Alberta, Coursera
                        </p>
                        <span>
                            2023
                        </span>
                    </Link>
                    <Link to="https://coursera.org/share/e388bd12ce23fd10d5a38b01d8e340c5" className="certifications_card">
                        <h4>
                            Scrum Master Certification
                        </h4>
                        <p>
                            Learn 
                        </p>
                        <span>
                            2021
                        </span>
                    </Link>
                    <Link to="https://www.credly.com/badges/2d30d33a-a351-4e7f-a22e-b253f5284608/public_url" className="certifications_card">
                        <h4>
                            Product Analytics Certification
                        </h4>
                        <p>
                            Credly
                        </p>
                        <span>
                            2023
                        </span>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Certifications;