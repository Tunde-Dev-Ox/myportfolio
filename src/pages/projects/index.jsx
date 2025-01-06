import DashboardLayout from "../../components/DashboardLayout";
import "./index.scss";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";


const Projects = () => {
    return(
        <DashboardLayout>
            <div className="projects">
                <h1 className="projects-header">
                    Projects
                </h1>
                <p className="projects-subtitle">
                    Building products that solve real-world problems.
                </p>
                <div className="client--projects-wrapper">
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
                    <ProjectCard 
                        projectImage="https://framerusercontent.com/images/dczhH8rR13eIcGUyPwaMja0It4.jpg?scale-down-to=1024"
                        projectTitle="Skoolboots"
                        projectDescription="An online platform that connects students with tutors for 1-on-1 science tutoring."
                        alt="Skoolboots"
                        projectYear="2025"
                        link="/projects/skoolboots"
                    />
                    <ProjectCard 
                        projectImage="https://framerusercontent.com/images/ZCGg3kQepodctXluTHFTfaiwlk.jpg?scale-down-to=1024"
                        projectTitle="Lingroks"
                        projectDescription="An AI powered text translator that helps you learn new languages built for Microsoft Imagine Cup."
                        alt="Lingroks"
                        projectYear="2025"
                        link="/projects/lingroks"
                    />
                    <ProjectCard 
                        projectImage="https://framerusercontent.com/images/KLl6DuQOJhnx9owbonqYSpcHk8.jpg?scale-down-to=1024"
                        projectTitle="Connectly"
                        projectDescription="A dating app that connects people based on their interests."
                        alt="Connectly"
                        projectYear="2025"
                        link="/projects/connectly"
                    />
                </div>
                <h1 className="projects-header">
                    Personal Projects
                </h1>
                <p className="projects-subtitle">
                    Projects I&apos;ve worked on in my free time either for fun or to learn new technologies.
                </p>
                <div className="client--projects-wrapper">
                    <ProjectCard 
                        projectImage="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        projectTitle="PlayBumble"
                        projectDescription="An application that notifies you when your favorite artist releases a new song or going on tour."
                        alt="PlayBumble"
                        projectYear="2025"
                        link="/projects/playbumble"
                    />
                    <ProjectCard 
                        projectImage="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        projectTitle="BuyBee"
                        projectDescription="A fully functional e-commerce platform for buying and selling products."
                        alt="BuyBee"
                        projectYear="2025"
                        link="/projects/buybee"
                    />
                    <ProjectCard 
                        projectImage="https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        projectTitle="Quiziks"
                        projectDescription="An AI powered quiz app that helps students prepare for exams."
                        alt="Quiziks"
                        projectYear="2025"
                        link="/projects/quiziks"
                    />
                    <ProjectCard 
                        projectImage="https://images.pexels.com/photos/22870044/pexels-photo-22870044/free-photo-of-scenic-view-on-suleymaniye-mosque.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        projectTitle="PlanTrip"
                        projectDescription="A travel planning app that helps you plan your trips and share with friends."
                        alt="PlanTrip"
                        projectYear="2025"
                        link="/projects/plantrip"
                    />
                </div>
                <div className="projects--see-more">
                    <p>
                        Want to see more personal projects? Check out my 👉<Link to="https://images.pexels.com/photos/22870044/pexels-photo-22870044/free-photo-of-scenic-view-on-suleymaniye-mosque.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load">Github</Link> 
                    </p>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Projects;