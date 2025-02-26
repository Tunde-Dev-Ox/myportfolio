import './index.scss'
import DashboardLayout from '../../components/DashboardLayout';
import Link from 'next/link';
import { IoMailOutline } from 'react-icons/io5';
import { GoArrowUp } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi';
import { PiTwitterLogo } from 'react-icons/pi';
import { PiLinkedinLogo } from 'react-icons/pi';
import { PiGithubLogoLight } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
    return(
        <DashboardLayout>
            <div className="contact">
                <div className="home__top">
                    <h1 className='home-title'>
                        Let&apos;s Connect!
                    </h1>
                    <div className="availability">
                        <div className="available">
                            <div className="green_blink"></div>
                            <span>
                                Available for work
                            </span>
                        </div>
                    </div>
                </div>
                <p className='home-about'>
                    Whether it&apos;s a new project idea, a product you want to enhance, a job offer or you just want to say hi, I&apos;m always open to new opportunities and collaborations. Feel free to reach out to me and let&apos;s make something great together.
                </p>
                <div className="main__contact">
                    <div className="main__contact_card__wrapper">
                        <Link href="mailto:iamjosephtunde@gmail.com" className="contact__card">
                            <IoMailOutline />
                            <h3>
                                Send me an email
                            </h3>
                            <GoArrowUp />
                        </Link>
                        <Link href="https://calendly.com/iamjosephtunde/consult_tunde" className="contact__card">
                            <FiPhone />
                            <h3>
                                Book a call
                            </h3>
                            <GoArrowUp />
                        </Link>
                        <Link href="https://x.com/__jot" className="contact__card">
                            <PiTwitterLogo />
                            <h3>
                                Twitter
                            </h3>
                            <GoArrowUp />
                        </Link>
                        <Link href="https://www.linkedin.com/in/josephtunde" className="contact__card">
                            <PiLinkedinLogo />
                            <h3>
                                Linkedin
                            </h3>
                            <GoArrowUp />
                        </Link>
                        <Link href="https://github.com/Tunde-Dev-Ox" className="contact__card">
                            <PiGithubLogoLight />
                            <h3>
                                Github
                            </h3>
                            <GoArrowUp />
                        </Link>
                        <Link href="whatsapp://send?phone=2347065484328" className="contact__card">
                            <FaWhatsapp />
                            <h3>
                                Whatsapp
                            </h3>
                            <GoArrowUp />
                        </Link>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}