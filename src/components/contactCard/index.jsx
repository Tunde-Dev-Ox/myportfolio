import React from 'react';
import './index.scss';
import Link from 'next/link'

const ContactCard = () => {
    return (
        <div className="contact-card">
            <div className="contact-wrapper">
                <p>
                    Do you have any project idea you want to discuss about? Or you want to meet for a coffee chat? Feel free to reach out to me.
                </p>
                <div className="contact-btn">
                    <Link href="/contact">
                        <span>
                            Contact Me
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;