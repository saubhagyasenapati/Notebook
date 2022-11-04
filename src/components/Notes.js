
import noteContext from '../Context/notes/noteContext';
import { useContext } from 'react';
import Noteitem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const Context=useContext(noteContext);
  const{notes}=Context;
  return (
    <>
    <AddNote/>
    <div className="row my- 3">
    <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <Noteitem  key={note._id} note={note}/>
    })}
  </div>
  </>
  )
}

export default Notes
