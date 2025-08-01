import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Login.css'
export default function Login() {
    return (
        <div className='login-page'>
            <div>
                <header className='head'>
                    <h1>Login Page</h1>
                </header>
            </div>
            <nav className='nav-links' >
                <Link to="/">Login</Link>
                <Link to="register">Register</Link>
                <Link to="dashboard">Dashboard</Link>
            </nav>
            <div className='login-form'>
                <form className='login'>
                    <div className='ip'>
                        <input type="text" id="username" name="username" required />
                       
                       </div>
                       <div className='ip'>
                           <input type="password" id="password" name="password" required />
                       </div>
                    <div className='btn'>
                        <button className='b1' type="submit">Login</button>
                    </div>
                </form>
            </div>
            <Outlet />
        </div>
    )
}
