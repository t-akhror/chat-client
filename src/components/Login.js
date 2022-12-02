import React,{useState,}from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser]=useState('');
  const [error, setError]=useState('');
  const navigate = useNavigate();

  const getInputUserName=(e)=>{
      setUser(e.target.value)
  }

  const login=async(e)=>{
    e.preventDefault();
    const username={user}
    console.log(user)
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'post',
        body: JSON.stringify(username),
        headers: {
          'Content-Type': 'application/json',
          "x-access-token": "token-value",
        }
      })
      const json = await response.json()
      console.log(response)
      if (!response.ok) {
        setError(json.error)
        console.log("not created")
      }
      if (response.ok) {
        setError(null)
        console.log('new workout added:', json)
      }

      navigate("/message", { state: { currentName: user } });
    
  }
  return (
    <div className="row justify-content-center pt-5">
      <form method='POST'
        className="col-4 mt-5 border border-secondary border-2 rounded bg-light bg-gradient p-4"
        onSubmit={login}
      >
        <div className="mb-3">
            <label htmlFor="username" className="form-label">Enter Name</label>
            <input 
                type="text" 
                className="form-control" 
                id="username" 
                value={user}
                onChange={getInputUserName}
                placeholder="Username" 
                
                required
                />
        </div>
       
        <button type="submit" className="btn btn-primary px-5">
          Join
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  )
}

export default Login
