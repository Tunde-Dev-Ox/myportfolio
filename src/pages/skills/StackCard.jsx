import React from "react";
import './index.scss'

const StackCard = ({ title, subtitle, logo, alt }) => {
    return (
        <div className="stacks--item-wrapper">
            <div className="stacks-logo">
                <img src={logo} alt={alt}/>
            </div>
            <div className="stacks--item-content">
                <h4>
                    {title}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default StackCard