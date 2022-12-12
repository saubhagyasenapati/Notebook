
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{
   const host ="http://localhost:5000" 
  const notesInitial=[];
      const [notes,setNotes]=useState(notesInitial)
     
       //get all note
       const getNotes=async()=>{
       
          
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
         
          headers: {
            'Content-Type': 'application/json',
            "auth-token":localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          
        });
        const json=await response.json();
       setNotes(json);
      }
      //Add a note
      const addNote=async(title,description,tag)=>{
        //todo api call
          
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
         
          headers: {
            'Content-Type': 'application/json',
            "auth-token":localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          
          body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
        });
        const note=await response.json();
        setNotes(notes.concat(note));
      }

      //edit a note
      const editNote=async(id,title,description,tag)=>{
        
          
          const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
           
            headers: {
              'Content-Type': 'application/json',
              "auth-token":localStorage.getItem('token')
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            
            body: JSON.stringify({title,description,tag}) // body data type must match "Content-Type" header
          });
          const json=response.json();
          let newNotes=JSON.parse(JSON.stringify(notes));
          for (let index = 0; index < notes.length; index++) {
         
          const element = newNotes[index];
          if(element._id===id)
          {
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
            break;
          }
         
         }
         setNotes(newNotes);
      }
      //delete a note
      const deleteNote=async(id)=>{
      
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
         
          headers: {
            'Content-Type': 'application/json',
            "auth-token":localStorage.getItem('token')
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
         
        });
        const json=await response.json();
        const newNotes=notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
   
       
      }
      
    return(
        <NoteContext.Provider value={{notes,getNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState; 