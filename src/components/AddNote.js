import React, { useState,useContext }from 'react'
import noteContext from '../Context/notes/noteContext';
import styled from 'styled-components';
const AddNote = (props) => {
  const context=useContext(noteContext);
  const{addNote}=context;
  const [note,setNote]=useState({title:"",description:"",tag:"default"})
  const handleClick=(e)=>
  {
    e.preventDefault();
     addNote(note.title,note.description,note.tag);
     props.showAlert("Added Succesfully","success")
     setNote({title:"",description:"",tag:""})
  }
  const onChange=(e)=>
  {
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <Section>
     <div className='text-center'>
      <h1>Add A Note</h1>
    <form >
    <div className="mb-2 ">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" name="title"aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required/>
    </div>
    <div className="mb-2">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description}  minLength={5} required/>
    </div>
    <div className="mb-2">
      <label htmlFor="description" className="form-label">Tag</label>
      <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required/>
    </div>

    <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-info " onClick={handleClick}>Add Note</button>
  </form>
    </div>
    </Section>
   
  )
}

export default AddNote


const Section=styled.section`
display:flex ;
justify-content:center ;
.text-center{
  width:25vw ;
}
.form-control{
  border-radius:1rem ;
}
label{
  font-weight:600;
  font-size:1.2rem ;
}
button{
  margin-top:1rem ;
  margin-bottom:2rem ;
}



@media only screen and (max-device-width:1080px)
{
  .addbody{
  width:95vw ;
  h1{
    text-align:center ;
  }
}
}
`