import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const url = 'http://localhost:5000';

    let navigate = useNavigate();
    const changePath = () => {
        navigate('/');
    }
    const [cred, setCred] = useState({ email: '', password: '' });
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(`${url}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, age: cred.age })
        });
        const json = await response.json();
        console.log(json);
        alert('User Signed Up');
        navigate('/')

    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="container" style={{ display: 'flex', flex: '1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <h1>Signup</h1>
                <div className="form w-50 d-flex flex-column gap-4">
                    <div className='d-flex flex-column'>
                        <label htmlFor="name">Enter Name</label>
                        <input onChange={onChange} type="text" name="name" id="name" placeholder='Enter Name' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email">Enter Email</label>
                        <input onChange={onChange} type="text" name="email" id="email" placeholder='Enter Email' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="email">Enter Password</label>
                        <input onChange={onChange} type="text" name="password" id="password" placeholder='Enter Password' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>
                    <div className='d-flex flex-column'>
                        <label htmlFor="age">Enter Age</label>
                        <input onChange={onChange} type="text" name="age" id="age" placeholder='Enter Age' style={{ borderRadius: '16px', border: '1px solid black', padding: '12px', fontSize: '16px' }} />
                    </div>

                    <div className='mx-auto'>
                        <button onClick={handleSignup} style={{ padding: '12px 20px', borderRadius: '14px', margin: 'auto', border: '1px solid black' }}>Submit</button>
                    </div>
                    <div>
                        <span>Already Have an Account? <span className='fw-bold' style={{color:"blue", cursor:'pointer'}} onClick={changePath}>Login</span> </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login