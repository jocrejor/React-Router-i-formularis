import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
    <div>Home</div>
    <Link to='/controlat'> Controlat </Link>
    <a href="/likeapro">Formulari Like a pro</a>    
    <button onClick={() => navigate('/controlat')}>Formulari Controlat</button>
    <button onClick={() => navigate('/likeapro')}>Formulari Like a pro</button>
    </div>
)
}

export default Home