import './index.scss'
import Link from 'next/link'

const ProjectCard = ({
    projectTitle,
    projectDescription,
    projectYear,
    projectImage,
    alt,
    link
}) => {
    return(
    <Link href={link} className="client--projectCard">
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