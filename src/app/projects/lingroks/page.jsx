import './index.scss';
import DashboardLayout from "../../../components/DashboardLayout";
import Link from 'next/link';
import ContactCard from '../../../components/contactCard';

export default function Lingroks() {
    return(
        <DashboardLayout>
            <div className="project-case-page">
                <div className="project-case__top">
                    <h1 className='project-case-title'>
                        Lingroks
                    </h1>
                    <p className='project-case-about'>
                        Lingroks - Your AI-Powered Companion for Translation and Text-to-Speech
                    </p>
                </div>
                <div className="project-case-wrapper">
                        <div className="project-case-inner-wrapper">
                            <div className="project-case-header">
                                <div className="back-to-project">
                                    <Link href="/projects">Back to Projects</Link>
                                </div>
                                <div className="project-case-category">
                                    <ul>
                                        <li>
                                            <span>
                                                Industry: AI & ML
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Platform: Web & Browser Extension
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Role: Product Manager
                                            </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className="project-case-mockup">
                                <img src="/lingroks.jpg" alt="Lingroks" />
                            </div>
                            <div className="project-case-contents">
                                <h2>
                                    Overview
                                </h2>
                                <p>
                                    Lingroks, built in the Microsoft Imagine Cup, 2025, is an AI-powered translation and text-to-speech app that helps you translate and listen to text in different languages. It is a web application that uses the latest AI and ML technologies to provide accurate translations and text-to-speech capabilities. With Lingroks, you can easily translate text from one language to another, listen to the translated text in a natural-sounding voice, get detailed insights into your contents, and much more. Lingroks is a product I am so proud of and it has gone from a competition project to a working product.
                                </p>
                                <h2>
                                    Vision & Mission
                                </h2>
                                <p>
                                    The vision of Lingroks is to break down language barriers and make communication easier for everyone. We do not want to build another Google Translate, DeepL, or Smartcat but a translation platform that is fully integrated into your daily workflow. We want to give developers and businesses the tools they need to build multilingual applications and websites, and help them reach a global audience.
                                </p>
                                <h2>
                                    Key features
                                </h2>
                                <p>
                                    Lingroks has a number of key features that set it apart from other translation apps. Some of the key features include:
                                    <ul>
                                        <li>AI-Powered Translation</li>
                                        <li>Text-to-Speech Capabilities</li>
                                        <li>Concise summary</li>
                                        <li>Insights & Analytics</li>
                                    </ul>
                                </p>
                                <h2>
                                    Key Responsibilities
                                </h2>
                                <p>
                                    As the Product Manager for Lingroks and the team lead of NextBuildr, the team behind Lingroks in the Microsoft Imagine Cup, 2025, I act as a technical product manager, overseeing the development of the product, managing the team, and ensuring that the product meets the needs of our target users. I am responsible for defining the product vision, creating the product roadmap, and working closely with the development team to ensure that the product is delivered on time and within budget. I also work as a frontend developer in collaboration with the frontend team helping to build the user interface and user experience of the product.
                                </p>
                                <h2>
                                    Technologies Used
                                </h2>
                                <p>
                                    Lingroks is built using the latest web technologies, including Next.js, Node.js, Express, and MongoDB. We used AWS for hosting and deployment, and we use Azure AI Services for the AI and ML capabilities of the product. We also use GitHub for version control and collaboration, and we use Figma for design and prototyping. We use Amplitude for analytics and user tracking, and we use sender for email marketing and communication.
                                </p>
                                <h2>
                                    Challenges & Solutions
                                </h2>
                                <p>
                                    The first challenge we faced was the challenge of time. I registered for the competition late and had to build a team <strong>(I already had the idea)</strong>, and build the product in less than 3 months. I spent about two weeks to gather a team of 5 devs (including me) and one designer. We had to work long hours and weekends coupled with a lot of syncing <strong>(we had a team member in Sri Lanka and the rest of us in Nigeria)</strong> to meet the deadline. The solution was to work in sprints, set clear goals, and communicate effectively. We used Discord for communication, ClickUp for project management, and Google Meet for meetings. We also used GitHub for version control and collaboration, and we used Figma for design and prototyping.<br /><br />
                                    We also faced the challenge of fine-tuning the AI and ML models to provide accurate translations and text-to-speech capabilities. The solution was to use Azure AI Services, which provides pre-trained models for translation and text-to-speech.
                                </p>
                                <h2>
                                    Key Results
                                </h2>
                                <p>
                                    Lingroks is in its MVP stage and we have already seen some key results. We have a working product that provides accurate translations and text-to-speech capabilities, and we have received positive feedback from our users. We have also seen an increase in user engagement and retention, and we have seen an increase in the number of users signing up for our platform. We are currently working on adding new features and improving the user experience of the product.
                                </p>
                                <h2>
                                    Lesson Learned & Future Plans
                                </h2>
                                <p>
                                    Building Lingroks has been a great learning experience for me. I have learned a lot about AI and ML, web development, product management, and team leadership. I have also learned a lot about working in a remote team and managing a project with a tight deadline. In the future, I plan to continue working on Lingroks and adding new features and improvements to the product. My vision is to push Lingroks to a growth stage and make it a leading translation platform in the market.
                                </p>
                                <p>
                                    Some of the great minds I worked with on Lingroks include: 
                                    <ul>
                                        <li>
                                            <a href="https://www.linkedin.com/in/nabin-ydv-511116305/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B1fU0I1k3RouhNjFbIS9%2B0g%3D%3D" target="_blank">Nabin Yadav</a> - Backend Developer & AI Engineer
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/ekweozor-innocent-026336223/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B1fU0I1k3RouhNjFbIS9%2B0g%3D%3D" target="_blank">Innocent Ekweozor</a> - Frontend Developer
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/samuel-hyeman-6b1626174/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B1fU0I1k3RouhNjFbIS9%2B0g%3D%3D" target="_blank">Samuel Hyeman</a> - Software Engineer
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/kenenwogu/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B1fU0I1k3RouhNjFbIS9%2B0g%3D%3D" target="_blank">Kenechukwu Nwogu</a> - Software Engineer
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/einsteinnnamah/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B1fU0I1k3RouhNjFbIS9%2B0g%3D%3D" target="_blank">Einstein Nnamah</a> - Designer
                                        </li>
                                    </ul>
                                </p>
                                <h2>
                                    Link
                                </h2>
                                <p>
                                    <a href='https://www.lingroks.live' target='_blank'>
                                        Visit Lingroks
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <ContactCard />
            </div>
        </DashboardLayout>
    )
}