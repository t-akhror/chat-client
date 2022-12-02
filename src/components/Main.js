import React,{useEffect,useState} from 'react'
import ChatList from './ChatList';
import MsgsList from './MsgsList'
import NewMsg from './NewMsg'

const Main = () => {
  const [users, setUsers]=useState([]);
  const[names, setNames]=useState([])
  useEffect(()=>{
    const fetchUsers=async ()=>{
      const respone=await fetch("http://localhost:4000/api/users");
      const json=await respone.json()
      if(respone.ok){
        setUsers(json)
      }
      
    } 
    
    fetchUsers()
  },[]);
  return (
    <div className="d-flex flex-column justify-content-center ">
        <p className='p-3 border-bottom border-dark fs-5 text-end'>
            You are logged as   <strong> Username</strong>
        </p>
        <div className="row">
          <div className="col-3 border-end border-2 border-secondary">
            <ChatList users={users} />
          </div>
          <div className="col-9">
            <NewMsg users={users}/>
            <hr />
            <MsgsList />
          </div>
        </div>
    </div>
  )
}

export default Main
