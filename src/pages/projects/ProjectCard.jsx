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
    <Link to={link} className="client--projectCard">
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
            </div>
    </Link>
    )
}

export default ProjectCard;