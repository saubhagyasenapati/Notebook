
import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState =(props)=>{
    const notesInitial=
    [
        {
          "_id": "6317460a805c5cd9131b98ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d79dd4c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79dd4f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        },
        {
          "_id": "6317460a805c5cd9131b98ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d79dd4c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79dd4f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        },
        {
          "_id": "6317460a805c5cd9131b98ef",
          "user": "6313298152349bc5584b0033",
          "title": "Ram",
          "description": "This is life life is bitch",
          "tag": "Personal",
          "date": "2022-09-06T13:07:22.778Z",
          "__v": 0
        },
        {
          "_id": "6346c765ae5c0dbd5d79dd4c",
          "user": "6313298152349bc5584b0033",
          "title": " Geeta",
          "description": "Life is a race",
          "tag": "Personal",
          "date": "2022-10-12T13:55:49.060Z",
          "__v": 0
        },
        {
          "_id": "6346c785ae5c0dbd5d79dd4f",
          "user": "6313298152349bc5584b0033",
          "title": " RAvi",
          "description": "life is not student of the year",
          "tag": "Personal",
          "date": "2022-10-12T13:56:21.500Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState; 