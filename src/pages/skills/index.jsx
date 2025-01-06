import DashboardLayout from '../../components/DashboardLayout'
import './index.scss'
import StackCard from './StackCard'

const Skills = () => {
    return(
        <DashboardLayout>
            <div className="stacks">
                <h1 className='stacks-title'>
                    Stack
                </h1>
                <p className='stacks-subtitle'>
                    Tools, resources and technologies I use daily.
                </p>
                <div className="stacksCard-wrapper">
                    <div className="stacksCard-inner-wrapper">
                        <h3>
                            PM skills
                        </h3>
                        <div className="stacks--item-grid">
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
                                title='Kanban'
                                subtitle='Framework'
                                logo='/jira.svg'
                                alt='Kanban logo'
                            />
                            <StackCard
                                title='Product strategy'
                                subtitle='Strategy'
                                logo="/strategy-planning-pr-svgrepo-com.svg"
                                alt='Product strategy logo'
                            />
                            <StackCard
                                title='User Stories'
                                subtitle='Requirement gathering'
                                logo='/write.svg'
                                alt='User Stories logo'
                            />
                            <StackCard
                                title='Wireframing'
                                subtitle='Design'
                                logo='/wireframe.svg'
                                alt='Wireframing logo'
                            />
                            <StackCard
                                title='Userflow'
                                subtitle='Design'
                                logo='/flow.svg'
                                alt='Userflow logo'
                            />
                            <StackCard
                                title='User research'
                                subtitle='Research'
                                logo='/user.svg'
                                alt='User research logo'
                            />
                            <StackCard
                                title='Competitor Analysis'
                                subtitle='Research'
                                logo='/analysis.svg'
                                alt='Competitor Analysis logo'
                            />
                            <StackCard
                               title="Project management"
                               subtitle="Management"
                               logo="/opentask.svg"
                               alt="project management icon"
                            />
                            <StackCard
                              title="Product Analytics"
                              subtitle="Analysis"
                              logo="/analytics.svg"
                              alt=""
                            />
                            <StackCard
                              title="Leadership"
                              subtitle="Sense of ownership"
                              logo="/leadership.svg"
                              alt="leadership icon"
                            />
                            <StackCard
                                title="AI PM"
                                subtitle="AI"
                                logo="/openai.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Design Thinking"
                                subtitle="Design"
                                logo="/design-svgrepo-com.svg"
                                alt="Design Thinking logo"
                            />
                            <StackCard
                                title="Roadmapping"
                                subtitle="Planning"
                                logo="/roadmap.svg"
                                alt="Roadmapping logo"
                            />
                            <StackCard
                                title="Customer journey"
                                subtitle="Customer journey mapping"
                                logo="/customer-service-communication-customer-service-sister-paper-svgrepo-com.svg"
                                alt="customer journey mapping logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="stacksCard-wrapper">
                    <div className="stacksCard-inner-wrapper">
                        <h3>
                            Tools
                        </h3>
                        <div className="stacks--item-grid">
                            <StackCard 
                                title='Notion'
                                subtitle='Note taking'
                                logo='/notion-2.svg'
                                alt='Notion logo'
                            />
                            <StackCard 
                                title='Slack'
                                subtitle='Communication'
                                logo='/slack.svg'
                                alt='Slack logo'
                            />
                            <StackCard 
                                title='Figma'
                                subtitle='Wireframing & Userflow'
                                logo='/figma.svg'
                                alt='Figma logo'
                            />
                            <StackCard 
                                title='VS Code'
                                subtitle='Code Editor'
                                logo='/vscode.svg'
                                alt='VS Code logo'
                            />
                            <StackCard 
                                title='Github'
                                subtitle='Version Control'
                                logo='/github.svg'
                                alt='Github logo'
                            />
                            <StackCard
                                title='Zoom'
                                subtitle='Video Conferencing'
                                logo='/zoom.svg'
                                alt='Zoom logo'
                            />
                            <StackCard
                                title='Google Meet'
                                subtitle='Video Conferencing'
                                logo='/google-meet.svg'
                                alt='Google Meet logo'
                            />
                            <StackCard
                                title="Clickup"
                                subtitle="Task Management"
                                logo="/ClickUp_idfty-HNVU_0.svg"
                                alt="Clickup logo"
                            />
                            <StackCard
                               title="Trello"
                                 subtitle="Task Management"
                                logo="/trello.svg"
                                alt="Trello logo"
                            />
                            <StackCard
                                title="Google Calendar"
                                subtitle="Calendar"
                                logo="/google-calendar.svg"
                                alt="Google Calendar logo"
                            />
                            <StackCard
                                title="ChatGPT"
                                subtitle="Research"
                                logo="/openai.svg"
                                alt=""
                            />
                            <StackCard
                                title="Claude"
                                subtitle="Writing & Planning"
                                logo="/Claude.svg"
                                alt="claude.ai logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="stacksCard-wrapper">
                    <div className="stacksCard-inner-wrapper">
                        <h3>
                            Technical skills
                        </h3>
                        <div className="stacks--item-grid">
                            <StackCard
                                title='React'
                                subtitle='Frontend'
                                logo='/react.svg'
                                alt='React logo'
                            />
                            <StackCard
                                title='Python'
                                subtitle='Backend'
                                logo='/python.svg'
                                alt='Python logo'
                            />
                            <StackCard
                                title="Javascript"
                                subtitle="Frontend"
                                logo="/javascript.svg"
                                alt="Javascript logo"
                            />
                            <StackCard
                                title="HTML"
                                subtitle="Frontend"
                                logo="/html.svg"
                                alt="HTML logo"
                            />
                            <StackCard
                                title="CSS"
                                subtitle="Frontend"
                                logo="/css.svg"
                                alt="CSS logo"
                            />
                            <StackCard
                                title="Sass"
                                subtitle="Frontend"
                                logo="/sass.svg"
                                alt="Sass logo"
                            />
                            <StackCard
                                title="Tailwind CSS"
                                subtitle="Frontend"
                                logo="/tailwind.svg"
                                alt="Tailwind CSS logo"
                            />
                            <StackCard
                                title="Next.js"
                                subtitle="Frontend"
                                logo="/next.svg"
                                alt="nextjs"
                            />
                            <StackCard
                                title="Vite"
                                subtitle="Frontend"
                                logo="/vite.svg"
                                alt="vite"
                            />
                            <StackCard
                                title="AWS"
                                subtitle="Cloud"
                                logo="/aws-2.svg"
                                alt="AWS logo"
                            />
                            <StackCard
                                title="DB management"
                                subtitle="Database"
                                logo="/mongodb-icon-1.svg"
                                alt="Heroku logo"
                            />
                            <StackCard
                                title="API knowledge"
                                subtitle="API"
                                logo="/aws-api-gateway.svg"
                                alt="API knowledge logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Skills