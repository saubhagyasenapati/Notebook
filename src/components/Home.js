import React,{useContext} from 'react'
import AddNote from './AddNote';
import Notes from './Notes';

const Home = (props) => {
 const  {showAlert}=props
  
  return (
    <>
    <div >
  
   <Notes showAlert={showAlert}/>
    </div>
    
  </>
  )
}

export default Home
