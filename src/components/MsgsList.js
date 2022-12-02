import React from 'react'

const MsgsList = () => {
    const allMsg=[{
        id:1,
        from:'Alex',
        to:'Jonny',
        title:'new task',
        body:' something something something something something something something',
        receivedTime:'21-11-2022 12:10:32'
    },{
        id:2,
        from:'Jonny',
        to:'Alex',
        title:'workout',
        body:' something something something something something something something',
        receivedTime:'22-10-2022 8:33:25'
    },{
        id:3,
        from:'Alex',
        to:'Jonny',
        title:'Dinner Time',
        body:' something something something something something something something',
        receivedTime:'23-11-2022 14:23:33'
    },{
        id:4,
        from:'Alex',
        to:'Jonny',
        title:'Dinner Time',
        body:' something something something something something something something',
        receivedTime:'23-11-2022 5:23:33'
    }]

let sortedMsg = allMsg.sort((a, b) => new Date(...a.receivedTime.split('-').reverse()) - new Date(...b.receivedTime.split('-').reverse()));
  return (
    <>
    {sortedMsg.map((msg)=>(
        <div className="card border-0 border-start border-2 my-2 rounden-0 rounded-end shadow-sm bg-body rounded" key={msg.id}>
        <div className="card-header border-0 d-flex justify-content-between align-items-center ">
            <h5 className="">{msg.from}</h5>
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
