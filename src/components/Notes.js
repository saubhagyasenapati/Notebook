
import noteContext from '../Context/notes/noteContext';
import { useContext } from 'react';
import Noteitem from './NoteItem';

const Notes = () => {
    const Context=useContext(noteContext);
  const{notes,setNotes}=Context;
  return (
    
    <div className="row my-3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <Noteitem  key={note._id} note={note}/>
    })}
  </div>
    
  )
}

export default Notes
