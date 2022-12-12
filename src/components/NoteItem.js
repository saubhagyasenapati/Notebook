import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import styled from "styled-components";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note,updateNote } = props;
  return (
    
     <div className="col-md-3">
       <Section>
      <div className="card my-3">
       
        <div className="card-body">
          <h5 className="card-title">
            {note.title}
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-info">
              {note.tag}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text"> {note.description}</p>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Deleted Succesfully","success")
            }}
          ></i>
          <i className="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note); }}></i>
        </div>
       
     
      </div>
      </Section>
    </div>
   
    
  );
};

export default Noteitem;

const Section=styled.section` 
.card{
  border-style:none;
  border-radius:2rem ;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .card-body{
    background-color:#FAF9F6;
    border-radius:2rem ;
  }
}
  
   
  
   
      
    

`