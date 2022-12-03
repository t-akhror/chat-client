import React,{useState,useEffect}from 'react'
import { useNavigate } from "react-router-dom";
// import axios from 'axios'

const Login = () => {
  const [user, setUser]=useState('');
  const [allUsers, setAllUsers]=useState({});
  const [error, setError]=useState('');
  const navigate = useNavigate();

  const getInputUserName=(e)=>{
      setUser(e.target.value)
  }
  useEffect(()=>{
    const fetchUsers=async ()=>{
      const respone=await fetch("http://localhost:4000/api/users");
      const json=await respone.json()
      if(respone.ok){
        setAllUsers(json)
      }
      
    } 
    fetchUsers()
  },[]);
  const login=async(e)=>{
    e.preventDefault();
    // check user is registerd or not
    if(allUsers.some(item=>item.name===user)){
            navigate("/message", { state: allUsers.find(item=>item.name===user)});
    }else{
      // if not create new user
      const response = await fetch('http://localhost:4000/api/users/', {
        method: 'post',
        body: JSON.stringify({user}),
        headers: {
          'Content-Type': 'application/json',
          "x-access-token": "token-value",
        }
      })
      var json = await response.json()
      console.log(response)
      if (!response.ok) {
        setError(json.error)
        console.log("not created")
      }
      if (response.ok) {
        setError(null)
        console.log('new user added:', json)
      }
      console.log('user is not avaible')
      navigate("/message", { state: json});
    }

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
