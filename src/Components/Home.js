import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/');
    }
    
  return (
    <div className='d-flex flex-column' style={{height:'100vh', justifyContent:'center', alignItems:'center'}}>
        <h1>Hello {localStorage.getItem('name')}</h1>
        <h2>You are successfully Signed in</h2>
        <p onClick={handleLogout} style={{color:'blue', cursor:'pointer'}} className="fw-bold">SignOut</p>
    </div>
  )
}

export default Home