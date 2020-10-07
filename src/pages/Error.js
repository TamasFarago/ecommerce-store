import React from 'react'
import "../styles/Error.css"
import {Link} from "react-router-dom"

export default function Error() {
    return (
        <section className="error">
            <div>404</div>
            <div>Page not found</div>
            <Link to="/">
            <button>Go to home page</button>
            </Link>
        </section>
    )
}
