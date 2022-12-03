import React,{useState} from 'react'
import Select from 'react-select'

const NewMsg = ({users, currentUser}) => {
    // const [sender, setSender]=useState({})
    // console.log(users)
    const options = []
    const getUsersList=()=>{
      users.map((user)=>{
         options.push({value:user._id,label:user.name})
      })
    }
    getUsersList();
    const newMessage =async(e)=>{
      e.preventDefault();
      const sender_id=currentUser.id
      const sender_name=currentUser.name;
      const receiver_id=e.target.sender.value;
      const title=e.target.title.value;
      const body=e.target.body.value;
      const msg={
        sender_id,
        receiver_id,
        sender_name,
        title,
        body
      }
      console.log(msg)
      if(title.trim().length>0&&body.trim().length>0){
       
        try {
          const response = await fetch('http://localhost:4000/api/messages/', {
          method: 'post',
          body: JSON.stringify(msg),
          headers: {
            'Content-Type': 'application/json',
            "x-access-token": "token-value",
          }
        })
        
        const json = await response.json()
        console.log(response)
        if (!response.ok) {
          console.log("not created")
        }
        if (response.ok) {
          console.log('new workout added:', json)
        }
        } catch (error) {
          console.log(error)
        }
        e.target.reset();
      }else{
        alert(" Please Fill all fields!");
      }
    }
  return (
      <form
        className="my-3 py-3 px-4 border border-secondary  rounded bg-light bg-gradient"
        method='post'
        onSubmit={newMessage}
      >
        <Select options={options} className='form-control mb-2' name='sender' required />
        <div className="input-group mb-2">
            <input type="text" className="form-control"  name='title' required placeholder="Title"  />
        </div>
            
        <div className="input-group mb-2">
            <textarea className="form-control" name='body' required></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary px-5">
          Send
        </button>
      </form>
  )
}

export default NewMsg
