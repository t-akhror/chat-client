import React,{useState} from 'react'
import {Hint} from 'react-autocomplete-hint';

const NewMsg = ({users}) => {
    const[hintData, setHintData]=useState([]);
    const [text, setText]=useState('')
    // console.log(users)
    
    
  return (
      <form
        className="my-3 py-3 px-4 border border-secondary  rounded bg-light bg-gradient"
      >
        <div className="input-group mb-2">
        <Hint options={hintData} allowTabFill >
            <input type="text" 
                className="form-control" 
                placeholder="Recipent's name"  
                defaultValue={text}
                onChange={e => setText(e.target.value)}
                />
        </Hint>  
        </div>

        <div className="input-group mb-2">
            <input type="text" className="form-control" placeholder="Title"  />
        </div>
            
        <div className="input-group mb-2">
            <textarea className="form-control" ></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary px-5">
          Send
        </button>
      </form>
  )
}

export default NewMsg
