import React, { useEffect,useState} from 'react'

const MsgsList = ({currentUser}) => {
    const [messages,setMessages]=useState([]);
    const [msgs,setMsgs]=useState([]);
    

    useEffect(()=>{
        const fetchMsgs=async ()=>{
            const respone=await fetch("http://localhost:4000/api/messages");
            const json=await respone.json()
            if(respone.ok){
              setMessages(json)
            }
            
          } 
          fetchMsgs()
        },[]);
        
        // setMsgs(...msgs,messages.find(item=>item.receiver_id===currentUser.id) )
        // console.log(msgs)
        
// let sortedMsg = messages.sort((a, b) => new Date(...a.receivedTime.split('-').reverse()) - new Date(...b.receivedTime.split('-').reverse()));
  return (
    <>
    { messages&&messages.map((msg)=>(
        
        <div className="card border-0 border-start border-2 my-2 rounden-0 rounded-end shadow-sm bg-body rounded" key={msg._id}>
        <div className="card-header border-0 d-flex justify-content-between align-items-center ">
            <h5 className="">{msg.sender_name}</h5>
            <div className="text-muted">{msg.receivedTime}</div>
        </div>
        <div className="card-body text-secondary">
            <h5 className="card-title">{msg.title}</h5>
            <p className="card-text ">{msg.body}</p>
        </div>
     </div>
    ))}
    </>
  )
}

export default MsgsList
