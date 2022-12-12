
import noteContext from '../Context/notes/noteContext';
import { useContext,useEffect,useRef,useState} from 'react';
import Noteitem from './NoteItem';
import AddNote from './AddNote';
import {useNavigate} from "react-router-dom"
import styled from 'styled-components';
const Notes = (props) => {
  let navigate=useNavigate();
    const Context=useContext(noteContext);
  const{notes,getNotes,editNote}=Context;
  useEffect(()=>
  {  if(localStorage.getItem('token')){
         getNotes();
    }
    else{
      navigate("/Login")
    }
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  const ref=useRef(null)
  const refClose=useRef(null)
  const [note,setNote]=useState({id:"",etitle:"",edescription:"",etag:"default"})
  const updateNote=(currentnote)=>{
    ref.current.click();
    setNote({eid:currentnote._id,etitle:currentnote.title,edescription:currentnote.description,etag:currentnote.tag})
   

  }
  const handleClick=(e)=>
  {

    console.log("updating the note...",note);
    editNote(note.eid,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Edited Succesfully","success")
  }
  const onChange=(e)=>
  {
    setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <>
    <Section >

    <AddNote showAlert={props.showAlert}/>
   
  
   <button type="button" className="btn btn-primary d-none" ref={ref}data-bs-toggle="modal" data-bs-target="#exampleModal">
     Launch demo modal
   </button>
   <div className='text-center modold'>
   <div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog modal-dialog-centered">
       <div className="modal-content">
         <div className="modal-header">
           <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="modal-body">
         <form>
       <div className="mb-3">
         <label htmlFor="title" className="form-label">Title</label>
         <input type="text" className="form-control" id="etitle" name="etitle"aria-describedby="emailHelp" value={note.etitle} onChange={onChange}  minLength={5} required/>
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">Description</label>
         <input type="text" className="form-control" id="edescription" name="edescription"value={note.edescription} onChange={onChange} minLength={5} required/>
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">Tag</label>
         <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required/>
       </div>
   
     </form>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
           <button  disabled={note.etitle.length<5||note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleClick}>Save the edit</button>
         </div>
       </div>
     </div>
   </div>
   </div>
  
       <div className="row my- 3">
       <h2>Your Notes</h2>
       {notes.length===0 &&'No Nodes to display'}
       {notes.map((note)=>{
         return <Noteitem  key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>
       })}
     </div>
    </Section>
    
  </>
  )
}

export default Notes


const Section=styled.section` 

padding:2% 5%;
width:100vw ;
background: #1CD8D2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #93EDC7, #1CD8D2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #93EDC7, #1CD8D2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
h2{
  text-align:center ;
  font-size:2.8rem ;
}
input{
  border-radius:2rem ;
}
.modal-content{
  background: #1CD8D2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #93EDC7, #1CD8D2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #93EDC7, #1CD8D2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

`