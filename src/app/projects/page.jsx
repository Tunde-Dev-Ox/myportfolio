import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import ContactCard from "../../components/contactCard";


export default function Projects() {
    return(
        <DashboardLayout>
            <div className="projects">
            <div className="home__top">
                    <h1 className='home-title'>
                        Projects
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
                    My projects are a true reflection of my passion for building products that solve real-world problems. I have worked on a variety of projects ranging from web applications to mobile apps.
                </p>
                <div className="client--projects-wrapper">
                    <ProjectCard 
                        projectImage="/brooi.jpg"
                        projectTitle="Brooi"
                        projectDescription="A vacation rental platform that helps you find the best vacation rentals in your city."
                        alt="Brooi"
                        link="/projects/brooi"
                    />
                    <ProjectCard 
                        projectImage="/lingroks.jpg"
                        projectTitle="Lingroks"
                        projectDescription="An AI powered translation and text-to-speech app that helps you translate and listen to text in different languages."
                        alt="Brooi"
                        link="/projects/lingroks"
                    />
                    {/* <ProjectCard 
                        projectImage="/screenbox.jpg"
                        projectTitle="ScreenBox"
                        projectDescription="A screen recording app that helps you record your screen and share with friends."
                        alt="ScreenBox"
                        projectYear="2025"
                        link="/projects/screenbox"
                    />
                    <ProjectCard 
                        projectImage="/onbrela.jpg"
                        projectTitle="Onbrela"
                        projectDescription="A video calling mobile app that helps you connect with friends and family."
                        alt="Onbrela"
                        projectYear="2024"
                        link="/projects/onbrela"
                    />
                    <ProjectCard 
                        projectImage="/skoolboots.jpg"
                        projectTitle="SkoolBoots"
                        projectDescription="A platform that helps students find the best science tutors for one-on-one online tutoring."
                        alt="SkoolBoots"
                        projectYear="2025"
                        link="/projects/skoolboots"
                    /> */}
                </div>
                <h1 className="home-title">
                    Fun Projects
                </h1>
                <p className="home-about">
                    Projects I have worked on for fun and to learn new technologies.
                </p>
                <div className="client--projects-wrapper">
                    <ProjectCard 
                        projectImage="/coincurrent.jpg"
                        projectTitle="Coincurrent"
                        projectDescription="A currency converter app that helps you convert currencies in real-time."
                        alt="Coincurrent"
                        projectYear="2025"
                        link='https://coincurrent.netlify.app'
                    />
                    <ProjectCard 
                        projectImage="/lockerfy.jpg"
                        projectTitle="Lockerfy"
                        projectDescription="A password generator and manager that helps you keep your passwords secure."
                        alt="lockerfy"
                        projectYear="2025"
                        link='https://lockerfy.netlify.app'
                    />
                </div>
                <div className="projects--see-more">
                    <p>
                        Want to see more personal projects? Check out my 👉<Link href="https://github.com/Tunde-Dev-Ox">
                        Github
                        </Link> 
                    </p>
                </div>
                <ContactCard />
            </div>
        </DashboardLayout>
    )
}