import React from "react";
import './index.scss'

const StackCard = ({ title, subtitle, logo, alt }) => {
    return (
        <div className="stacks--item-wrapper">
            <div className="stacks--item-header">
                <div className="stack-logo">
                    <img src={logo} alt={alt}/>
                </div>
                <h4>
                    {title}
                </h4>
            </div>
            <div className="stacks--item-content">
                <p>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default StackCard