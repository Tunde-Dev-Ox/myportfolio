import './index.scss'
import { Link } from "react-router-dom";

const ProjectCard = ({
    projectTitle,
    projectDescription,
    projectYear,
    projectImage,
    alt,
    link
}) => {
    return(
    <Link to="" className="client--projectCard">
        <img src={projectImage} alt={alt} />
        <div className="project-card--content">
            <div className="project-card--content--text">
                <h5>
                    {projectTitle}
                </h5>
                <p>
                    {projectDescription}
                </p>
            </div>
            <div className="project-time--btn">
                <span>
                    {projectYear}
                </span>
            </div>
            </div>
        </Link>
    )
}

export default ProjectCard;