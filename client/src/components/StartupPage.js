import React from 'react'
import { Link } from 'react-router-dom'

export default function StartupPage() {
    return (
        <div className="text-center">
            <h1 className="main-title Startup-Page title">welcome to our app</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}