import ContactCard from '../../components/contactCard'
import DashboardLayout from '../../components/DashboardLayout'
import './index.scss'
import StackCard from './StackCard'
import Link from 'next/link'

const Stack = () => {
    return(
        <DashboardLayout>
            <div className="stacks">
                <div className="home__top">
                    <h1 className='home-title'>
                        Stack
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
                        My stack is a combination of tools, skills and technologies like Figma, ClickUp, Notion, Trello, React, Miro, Roadmapping, Competitive analysis, etc. My goal is to build products that users love and solve an actual problem.
                    </p>
                <div className="stacksCard-wrapper">
                    <div className="stacksCard-inner-wrapper stacksCard-inner-wrapper-first">
                        <h3>
                            PM skills
                        </h3>
                        <div className="stacks--item-grid">
                            <StackCard
                                title="AI Product Management"
                                subtitle="I have experience working with AI products and managing AI projects."
                                logo="/ai.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Startup Environment"
                                subtitle="I have experience working in a startup environment. I have worked in a fast-paced environment and I am comfortable with ambiguity."
                                logo="/startup.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Roadmapping"
                                subtitle="I create product roadmaps that align with the company's goals. Without a roadmap, it's hard to know where you're going."
                                logo="/roadmap.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Competitive Analysis"
                                subtitle="I conduct competitive analysis to understand the market. My belief is that understanding the market is key to building successful products."
                                logo="/competitive.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="User Research"
                                subtitle="I conduct user research to understand user needs. I believe in user-centered design."
                                logo="/research.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Design"
                                subtitle="I have experience working with product designers to create user-friendly products."
                                logo="/design.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Development"
                                subtitle="I have experience working with developers and engineers to build products."
                                logo="/development.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Agile Methodology"
                                subtitle="I have experience working with agile methodology and Scrum."
                                logo="/agile.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Launch"
                                subtitle="I have experience launching products and managing product launches."
                                logo="/launch.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Strategy"
                                subtitle="I have experience creating product strategies and vision that align with the company's goals."
                                logo="/strategy.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="PLC Management"
                                subtitle="I have experience managing product life cycle. I can take a product from ideation to launch. I have taken a product from ideation to launch."
                                logo="/management.svg"
                                alt="AI Product Management logo"
                            />
                            <StackCard
                                title="Product Metrics"
                                subtitle="I have experience defining product metrics and KPIs. I use data to make informed decisions. I believe in data-driven product management."
                                logo="/metrics.svg"
                                alt="AI Product Management logo"
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
                                title="Figma"
                                subtitle="I use Figma in my day-to-day for wireframing, UX design, user flows and prototyping. Figma is my go-to tool for design."
                                logo="/figma.svg"
                                alt="Figma logo"
                            />
                            <StackCard
                                title="ClickUp"
                                subtitle="I use ClickUp for project management and task management. I believe I have a great understanding of ClickUp."
                                logo="/ClickUp_idfty-HNVU_0.svg"
                                alt="ClickUp logo"
                            />
                            <StackCard
                                title="Notion"
                                subtitle="I use Notion for note-taking, documentation and project management. I believe It's my go-to tool for documentation."
                                logo="/notion-2.svg"
                                alt="Notion logo"
                            />
                            <StackCard
                                title="Trello"
                                subtitle="I use Trello for project management and task management. I believe I have a great understanding of Trello."
                                logo="/trello.svg"
                                alt="Trello logo"
                            />
                            <StackCard
                                title="Miro"
                                subtitle="I use Miro for brainstorming, user story mapping and user flows."
                                logo="/miro-2.svg"
                                alt="Miro logo"
                            />
                            <StackCard
                                title="ChatGPT"
                                subtitle="I use ChatGPT for generating ideas, researching and brainstorming."
                                logo="/openai.svg"
                                alt="ChatGPT logo"
                            />
                            <StackCard
                                title="Slack"
                                subtitle="I use Slack for communication and collaboration."
                                logo="/slack.svg"
                                alt="Slack logo"
                            />
                            <StackCard
                                title="Zoom"
                                subtitle="I use Zoom for video calls and meetings."
                                logo="/zoom.svg"
                                alt="Zoom logo"
                            />
                            <StackCard
                                title="Google Workspace"
                                subtitle="I use Google Workspace for email, calendar, docs and sheets."
                                logo="/google.svg"
                                alt="Google Workspace logo"
                            />
                            <StackCard
                                title="Microsoft Office"
                                subtitle="I use Microsoft Office for Word, Excel and PowerPoint."
                                logo="/microsoft-5.svg"
                                alt="Microsoft Office logo"
                            />
                            <StackCard
                                title="Github"
                                subtitle="I use Github for version control and collaboration on code bases."
                                logo="/github.svg"
                                alt="Github logo"
                            />
                            <StackCard
                                title="Jira"
                                subtitle="I use Jira for project management and issue tracking."
                                logo="/jira.svg"
                                alt="Jira logo"
                            />
                            <StackCard
                                title="Amplitude"
                                subtitle="I use Amplitude for product analytics and user behavior analytics. I am comfortable with Amplitude."
                                logo="/amplitude.svg"
                                alt="Amplitude logo"
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
                                title="React"
                                subtitle="I have experience working with React. I have built web applications with React. This portfolio is built with React.😊"
                                logo="/react.svg"
                                alt="React logo"
                            />
                            <StackCard
                                title="API Integration"
                                subtitle="I have experience integrating APIs. I have an understanding of how APIs work and how it affects the business."
                                logo="/postman.svg"
                                alt="Node.js logo"
                            />
                            <StackCard
                                title="JavaScript"
                                subtitle="I have experience working with JavaScript. I believe I am an intermediate JavaScript developer."
                                logo="/javascript.svg"
                                alt="Node.js logo"
                            />
                            <StackCard
                                title="Software Testing"
                                subtitle="I have experience testing softwares manually and with tools like Postman and browser stack."
                                logo="/browserstack.svg"
                                alt="browser stack"
                            />
                            <StackCard
                                title="HTML"
                                subtitle="I have experience working with HTML. I have built websites with HTML."
                                logo="/html.svg"
                                alt="HTML logo"
                            />
                            <StackCard
                                title="CSS"
                                subtitle="I have experience working with CSS. I have styled websites with CSS."
                                logo="/css.svg"
                                alt="CSS logo"
                            />
                            <StackCard
                                title="Python"
                                subtitle="I have some experience working with Python. I have built projects with Python. I can regard myself as an intermediate Python developer."
                                logo="/python.svg"
                                alt="Python logo"
                            />
                            <StackCard
                                title="Tailwind"
                                subtitle="I have experience working with Tailwind CSS. I use Tailwind CSS for styling websites."
                                logo="/tailwind.svg"
                                alt="Git logo"
                            />
                        </div>
                    </div>
                </div>
                <ContactCard />
            </div>
        </DashboardLayout>
    )
}

export default Stack;