import React from 'react'
import '../../index.css'
import './footer.css'

function footer() {
    return (
        <div className="footer-container">
        <h2>
            Developer<span role="img" aria-label="">💻</span>  : {" "}
            <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/UmairShah90"
            >
            Umair Zafar <span role="img" aria-label="">😍</span> 

            </a>{" "}
        </h2>
        </div>
    )
}

export default footer;
