import React from 'react'
import './Register.css'
export default function Register() {
  return (
    <div>
        <div>
            <header className='head'>
                <h1>Register Page</h1>
            </header>    
            <div className='form'>
                <form className='register'>
                    <div className='ip'>
                        <input type="text" id="username" name="username" placeholder="Username" required />
                    </div>
                    <div className='ip'>
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className='ip'>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                    </div>
                    <div className='btn'>
                        <button className='b1' type="submit">Register</button>
                    </div>
                </form>

        </div>
      
    </div>
    </div>
  )
}
