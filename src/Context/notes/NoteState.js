
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{
    const notesInitial=
    [
        {
          "_id": "6317460a805c5cd9131b983ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d79d3d4c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79dd24f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        },
        {
          "_id": "6317460a805c5cd9131b984ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d79dd41c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79dd43f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        },
        {
          "_id": "6317460a805c5cd9131b982ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d795dd4c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79d6d4f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
      
      //Add a note
      const addNote=(title,description,tag)=>{
        //todo api call
        console.log("Adding a new Node");
       const note={
          "_id": "6346c785ae5c0dbd5d79dd43f",
          "user": "6313298152349bc5584b0033",
          "title": title,
          "description":description,
          "tag": tag,
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        };
       setNotes(notes.concat(note))
      }

      //edit a note
      const editNote=()=>{
        
      }
      //delete a note
      const deleteNote=(id)=>{
        console.log("Deleting note with id"+id);
        const newNotes =notes.filter((note)=>{return note._id!==id});
        setNotes(newNotes);
      }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState; 