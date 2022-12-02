import React from 'react'

const ChatList = ({users}) => {
    
  return (
    <div className='my-3  h-100 borderBottom'>
    {users && users.map((user)=>(
        <div className="card border-0 border-bottom p-0 py-1  bg-body rounded-0 " key={user._id}>
            <div className="card-body p-1 text-secondary effect "  >
                <h5 className="card-title">{user.name}</h5>
                <p className="card-subtitle mb-2 text-muted">{user._id}</p>
            </div>
    </div>
    ))}
    </div >
  )
}

export default ChatList
