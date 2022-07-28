import React from 'react'
import { Link } from 'react-router-dom'



export default function LoginPage() {

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Enter your details below to join the queue</h5>
            <form action="/home">
                <p>
                    <label>First name</label><br/>
                    <input type="text" name="first_name" required placeholder='eg: John'/>
                </p>
                <p>
                    <label>Last name</label><br/>
                    <input type="text" name="last_name" required placeholder='eg: Doe'/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required placeholder='eg: johndoe@email.com'/>
                </p>
                <p>
                    <label>Phone number</label><br/>
                    <input type="number" name="number" required placeholder='eg: +1 647 123 4321'/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Join the Queue</button>
                </p>
            </form>
            <footer>
                {/* <p><Link to="/">Back to HomePage</Link>.</p> */}
            </footer>
        </div>
    )

}