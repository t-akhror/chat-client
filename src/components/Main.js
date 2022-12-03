import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom';
import ChatList from './ChatList';
import MsgsList from './MsgsList'
import NewMsg from './NewMsg'

const Main = () => {
  const [users, setUsers]=useState([]);
  const[currentUser, setCurrentUser]=useState({})

  const location = useLocation();

  useEffect(()=>{
    const fetchUsers=async ()=>{
      const respone=await fetch("http://localhost:4000/api/users");
      const json=await respone.json()
      if(respone.ok){
        setUsers(json)
      }
      
    } 
    setCurrentUser({id:location.state._id,name:location.state.name})
    fetchUsers()
  },[]);
  return (
    <div className="d-flex flex-column justify-content-center ">
        <p className='p-3 border-bottom border-dark fs-5 text-end'>
            You are logged as   <strong> {currentUser.name}</strong>
        </p>
        
            <NewMsg users={users} currentUser={currentUser}/>
            <hr />
            <MsgsList currentUser={currentUser}/>
          
    </div>
  )
}

export default Main
