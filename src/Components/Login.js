import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const url = 'http://localhost:5000';
    const changePath = () => {
        navigate('/Signup');
    }
    const [cred, setCred] = useState({ email: '', password: '' });

    const handleLogin = async (e) => {
        if (cred.password.length < 5 || cred.email.length === 0) {
            alert("please Enter Valid Email and Password")
            e.preventDefault();
        } else {

            e.preventDefault();
            const response = await fetch(`${url}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: cred.email, password: cred.password })
            });
            const json = await response.json();
            console.log(json)

            if (json.success) {
                localStorage.setItem('token', json.token);
                localStorage.setItem('name', json.name);
                alert('logged in successfully')
                navigate('/Home');
            }else{
                alert('user not found')
            }

        }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container" style={{ display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1>Login</h1>
                <div className="form w-50 d-flex flex-column gap-4">
                    <div className='d-flex flex-column'>
                        <label htmlFor="email">Enter Email</label>
                        <input onChange={onChange} type="text" name="email" id="email" placeholder='Enter Email' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email">Enter Password</label>
                        <input onChange={onChange} type="text" name="password" id="password" placeholder='Enter password' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>
                    <div className='mx-auto'>
                        <button onClick={handleLogin} style={{ padding: '12px 20px', borderRadius: '14px', margin: 'auto', border: '1px solid black' }}>Login</button>
                    </div>
                </div>
                <div className='my-4'>
                    <span>Dont have an Account?<span className='fw-bold ' style={{ color: "blue", cursor: 'pointer' }} onClick={changePath}>Signup</span> </span>
                </div>
            </div>
        </>
    )
}

export default Login