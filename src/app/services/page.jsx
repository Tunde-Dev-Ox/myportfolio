import './index.scss';
import '../home.scss';
import '../../components/contactCard/index.scss';
import Link from 'next/link';
import DashboardLayout from '../../components/DashboardLayout';
import { FaWhatsapp } from 'react-icons/fa6';
import ContactCard from '../../components/contactCard';
import { IoIosArrowRoundForward } from 'react-icons/io';


export default function Services() {
    return(
        <DashboardLayout>
            <div className="services">
                <div className="home__top">
                    <h1 className='home-title'>
                        Services
                    </h1>
                    <div className="availability">
                        <div className="available">
                            <div className="green_blink"></div>
                            <span>
                                Available for work
                            </span>
                        </div>
                        <div className="contact-btn">
                            <Link href="/contact">
                                <span>
                                    Contact Me
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className='home-about'>
                    I offer a range of services that can help you launch your next project, build your software product, or enhance your existing product. I have experience delivering high-quality MVP, web applications, mobile apps, and more.
                </p>
                {/* <div className="service-cta">
                    <Link href="whatsapp://send?phone=2347065484328" className="service-cta__btn">
                        <FaWhatsapp />
                        <span>
                            Send a message
                        </span>
                    </Link>
                </div> */}
                <div className="services__card__wrapper">
                    <div className="services__card__inner__wrapper">
                         <div className="services__card">
                            <h3 className="services__card_header">
                                Product Management
                            </h3>
                            <p className="services__card_description">
                                With an experience working with cross-functional teams, I can help you build and launch your next product, manage your product roadmap, and work with your team to deliver high-quality products.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        Wireframing & Prototyping
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        User Research
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Competitive analysis & market research
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Product Roadmapping
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Cross-functional team collaboration
                                    </span>
                                </li>
                            </ul>
                            <div className="services__card__cta">
                                <Link href="https://calendly.com/iamjosephtunde/consult_tunde">
                                    <span>
                                        Schedule a call
                                    </span>
                                </Link>
                                <Link href="whatsapp://send?phone=2347065484328">
                                    <FaWhatsapp />
                                    <span>
                                        Send a message
                                    </span>
                                </Link>
                            </div>
                         </div>
                         <div className="services__card">
                            <h3 className="services__card_header">
                                Project Management
                            </h3>
                            <p className="services__card_description">
                                I can help you manage your project from start to finish, ensuring that your project is delivered on time, within budget, and to the highest quality standards.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        Project Planning
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Project Scheduling
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Agile Project Management
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Sprint planning & execution
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Product roadmap & backlog management
                                    </span>
                                </li>
                            </ul>
                            <div className="services__card__cta">
                                <Link href="https://calendly.com/iamjosephtunde/consult_tunde">
                                    <span>
                                        Schedule a call
                                    </span>
                                </Link>
                                <Link href="whatsapp://send?phone=2347065484328">
                                    <FaWhatsapp />
                                    <span>
                                        Send a message
                                    </span>
                                </Link>
                            </div>
                         </div>
                         <div className="services__card">
                            <h3 className="services__card_header">
                                MVP Development
                            </h3>
                            <p className="services__card_description">
                                In collaboration with my team, <Link href="/">NextBuildr</Link>, I can help you build a Minimum Viable Product (MVP) that meets your business goals, user needs, and technical requirements.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        Lean startup approach & rapid prototyping
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        User research & feedback
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Defining core features & iterations
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Software development & testing
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Launch strategies & marketing
                                    </span>
                                </li>
                            </ul>
                            <div className="services__card__cta">
                                <Link href="https://calendly.com/iamjosephtunde/consult_tunde">
                                    <span>
                                        Schedule a call
                                    </span>
                                </Link>
                                <Link href="whatsapp://send?phone=2347065484328">
                                    <FaWhatsapp />
                                    <span>
                                        Send a message
                                    </span>
                                </Link>
                            </div>
                         </div>
                         <div className="services__card">
                            <h3 className="services__card_header">
                                Full product development & enhancements
                            </h3>
                            <p className="services__card_description">
                                In collaboration with my team, <Link href="/">NextBuildr</Link>, I can deliver to you a full software product, web application, mobile app, or website that meets your business goals, user needs, and technical requirements.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        End-to-end product development
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Scalable architecture & design
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Continuous integration & deployment
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Continuous improvements & optimization
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        User feedback analysis & iteration
                                    </span>
                                </li>
                            </ul>
                            <div className="services__card__cta">
                                <Link href="https://calendly.com/iamjosephtunde/consult_tunde">
                                    <span>
                                        Schedule a call
                                    </span>
                                </Link>
                                <Link href="whatsapp://send?phone=2347065484328">
                                    <FaWhatsapp />
                                    <span>
                                        Send a message
                                    </span>
                                </Link>
                            </div>
                         </div>
                         <div className="services__card">
                            <h3 className="services__card_header">
                                Writing & Documentation
                            </h3>
                            <p className="services__card_description">
                                I can help you write and document your product requirements, user stories, acceptance criteria, technical documentation, user guides, and more.
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        Product specs & feature documentation
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        User guides & tutorials
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Blog posts & articles
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        White papers
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Technical documentation
                                    </span>
                                </li>
                            </ul>
                            <div className="services__card__cta">
                                <Link href="https://calendly.com/iamjosephtunde/consult_tunde">
                                    <span>
                                        Schedule a call
                                    </span>
                                </Link>
                                <Link href="whatsapp://send?phone=2347065484328">
                                    <FaWhatsapp />
                                    <span>
                                        Send a message
                                    </span>
                                </Link>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="home_stacks">
                                    <h3 className="home_stacks-header">
                                        Stacks
                                    </h3>
                                    <div className="home__stacks_wrapper">
                                        <div className="home__stack_card">
                                            <img src="/ClickUp_idfty-HNVU_0.svg" alt="clickup" />
                                            <h4>
                                                ClickUp
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/trello.svg" alt="trello" />
                                            <h4>
                                                Trello
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/notion-2.svg" alt="notion" />
                                            <h4>
                                                Notion
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/postman.svg" alt="postman" />
                                            <h4>
                                                API Testing
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/github.svg" alt="github" />
                                            <h4>
                                                Github
                                            </h4>
                                        </div>
                                        <div className="home__stack_card">
                                            <img src="/user.svg" alt="user research" />
                                            <h4>
                                                User research
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="see-more">
                                        <Link href="/stack">
                                            <span>
                                                View full stack
                                            </span>
                                            <IoIosArrowRoundForward />
                                        </Link>
                                    </div>
                                </div>
                <ContactCard />
            </div>
        </DashboardLayout>
    )
}