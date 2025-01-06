import DashboardLayout from '../../components/DashboardLayout'
import './index.scss'
import { FaCopy } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Services = () => {
    return(
        <DashboardLayout>
            <div className="services">
                <h1 className="services-header">
                    Services
                </h1>
                <p className="services-subtitle">
                    Blending creativity with technology to deliver functional and beautiful products.
                </p>
                <button className='services-cta'>
                    Schedule a call
                </button>
                <div className="services--card-wrapper">
                    <div className="services--card">
                        <h2>
                            Product Management
                        </h2>
                        <p>
                            I help clients and businesses build and manage products that solve real-world problems.
                        </p>
                        <ul>
                            <li>
                                Product Strategy
                            </li>
                            <li>
                                Roadmapping
                            </li>
                            <li>
                                User Research
                            </li>
                            <li>
                                Prototyping
                            </li>
                            <li>
                                MVP design and validation
                            </li>
                        </ul>
                        <div className="services--card-cta">
                            <button>
                                Get started
                            </button>
                            <button>
                                <FaCopy />
                                <span>
                                Email
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="services--card-wrapper">
                    <div className="services--card">
                        <h2>
                            Project Management
                        </h2>
                        <p>
                            I can manage your projects from start to finish, ensuring that they are delivered on time and within budget.
                        </p>
                        <ul>
                            <li>
                                Project Planning
                            </li>
                            <li>
                                Resource Management
                            </li>
                            <li>
                                Risk Management
                            </li>
                            <li>
                                Stakeholder Management
                            </li>
                            <li>
                                Reporting and Documentation
                            </li>
                        </ul>
                        <div className="services--card-cta">
                            <button>
                                Get started
                            </button>
                            <button>
                                <FaCopy />
                                <span>
                                Email
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="services--card-wrapper">
                    <div className="services--card">
                        <h2>
                            Full digital product development
                        </h2>
                        <p>
                            In collaboration with my product team, <Link to=''>NextBuildr</Link> I can provide end-to-end product development services for your business.
                        </p>
                        <ul>
                            <li>
                                MVP Delivery
                            </li>
                            <li>
                                App Development
                            </li>
                            <li>
                                Website Development
                            </li>
                            <li>
                                Cloud service
                            </li>
                            <li>
                                Cybersecurity
                            </li>
                            <li>
                                AI Implementation
                            </li>
                            <li>
                                Product Design
                            </li>
                            <li>
                                Product Management
                            </li>
                            <li>
                                Marketing & Operations
                            </li>
                        </ul>
                        <div className="services--card-cta">
                            <button>
                                Get started
                            </button>
                            <button>
                                <FaCopy />
                                <span>
                                Email
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="services--card-wrapper">
                    <div className="services--card">
                        <h2>
                            Technical writing
                        </h2>
                        <p>
                            I can help you create high-quality technical documentation for your products and services.
                        </p>
                        <ul>
                            <li>
                                User Guides
                            </li>
                            <li>
                                API Documentation
                            </li>
                            <li>
                                Technical Reports
                            </li>
                            <li>
                                Training Materials
                            </li>
                            <li>
                                Blog Posts
                            </li>
                        </ul>
                        <div className="services--card-cta">
                            <button>
                                Get started
                            </button>
                            <button>
                                <FaCopy />
                                <span>
                                Email
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Services