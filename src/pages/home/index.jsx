import { Link } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import './index.scss'
import { FaCopy } from 'react-icons/fa'
import ProjectCard from '../projects/ProjectCard'
import BlogCard from '../../components/blogCard'
import useFetchBlogs from '../../hooks/useFetchBlogs'
import StackCard from '../skills/StackCard'
import { MdMiscellaneousServices } from 'react-icons/md'
import { FaDiagramProject, FaDownload } from "react-icons/fa6";
import MobileHeader from '../../components/mobileHeader'


const Home = () => {
    const {blogsPreview, loading, error} = useFetchBlogs({ contentType: "blogPage" });
    return (
        <DashboardLayout>
            {/* <MobileHeader /> */}
            <div className="home">
                <h1 className='home-title'>
                    Hey, I&apos;m Tunde.
                </h1>
                <h2 className='home-subtitle'>
                    I build user-centric digital <span>products.</span>
                </h2>
                <p className='home-about'>
                    I am a technical product manager based in Lagos, Nigeria specialized in managing and building exceptional softwares, applications, and everything in between. Simply put, I know how to get the right things done.
                </p>
                <div className="home-cta--wrapper">
                    <Link to="/about" className='home-cta'>
                        About
                    </Link>
                    <a href='/Joseph-Tunde-Product-Manager.pdf' download='/Joseph-Tunde-Product-Manager.pdf'>
                        <FaDownload />
                        <span>
                            Resume
                        </span>
                    </a>
                </div>
                <div className="home__projects">
                    <h3 className="home__projects-header">
                        Work
                    </h3>
                    <div className="home_projects__wrapper">
                    <ProjectCard 
                        projectImage="https://framerusercontent.com/images/Jo0P4Jks8pQGWxCvweyGXEt0II.jpg?scale-down-to=1024"
                        projectTitle="Brooi"
                        projectDescription="A vacation rental platform that connects property owners with travelers."
                        alt="Brooi"
                        projectYear="2023"
                        link="/projects/brooi"
                    />
                    <ProjectCard 
                        projectImage="https://framerusercontent.com/images/Jo0P4Jks8pQGWxCvweyGXEt0II.jpg?scale-down-to=1024"
                        projectTitle="Onbrela"
                        projectDescription="A video calling app that connects people all over the world."
                        alt="Onbrela"
                        projectYear="2024"
                        link="/projects/onbrela"
                    />
                    </div>
                </div>
                <div className="home_blog">
                    <h3 className="home_blog-header">
                        Thoughts
                    </h3>
                    <div className="home_blogs__wrapper">
                        {
                            blogsPreview.slice(0, 2).map((blog) => (
                                <BlogCard
                                key={blog.sys.id}
                                title={blog.fields.title}
                                date={blog.fields.date}
                                tag={blog.fields.tag}
                                img={`${blog.fields.image.fields.file.url}?q=35`}
                                link={`/blog/${blog.fields.slug}`}
                                alt={blog.fields.image.fields.title}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="home_stacks">
                    <h3 className="home_stacks-header">
                        Stacks
                    </h3>
                    <div className="home__stacks_wrapper">
                            <StackCard 
                                title='Agile'
                                subtitle="Methodology"
                                logo='/agile.svg'
                                alt="Agile logo"
                            />
                            <StackCard
                                title='Scrum'
                                subtitle='Framework'
                                logo='/scrum.svg'
                                alt='Scrum logo'
                            />
                            <StackCard
                                title='Wireframing'
                                subtitle='Design'
                                logo='/wireframe.svg'
                                alt='Wireframing logo'
                            />
                            <StackCard
                                title='Product strategy'
                                subtitle='Strategy'
                                logo="/strategy-planning-pr-svgrepo-com.svg"
                                alt='Product strategy logo'
                            />
                            <StackCard 
                                title='Slack'
                                subtitle='Communication'
                                logo='/slack.svg'
                                alt='Slack logo'
                            />
                            <StackCard
                                title='User research'
                                subtitle='Research'
                                logo='/user.svg'
                                alt='User research logo'
                            />
                            <StackCard
                                title='User Stories'
                                subtitle='Requirement gathering'
                                logo='/write.svg'
                                alt='User Stories logo'
                            />
                            <StackCard
                                title="AI Product Management"
                                subtitle="AI"
                                logo="/openai.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Javascript"
                                subtitle="Frontend"
                                logo="/javascript.svg"
                                alt="Javascript logo"
                            />
                    </div>
                </div>
                <div className="home__more">
                    <div className="home_more__wrapper">
                        <div className="home_more__card">
                             <MdMiscellaneousServices />
                                <h4>
                                    Services
                                </h4>
                            <p>
                                Explore my range of services.
                            </p>
                            <Link to="/services">
                                View Services
                            </Link>
                        </div>
                        <div className="home_more__card">
                            <FaDiagramProject />
                            <h4>
                                Work
                            </h4>
                            <p>
                                Explore my projects and work history.
                            </p>
                            <Link to="/projects">
                                View Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Home