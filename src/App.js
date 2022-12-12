
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {useState} from "react"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
 import SignUp from './components/SignUp'
 import Login from './components/Login'
 import Hero from './components/Hero'
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
   <>
   <NoteState>
   <Router>
   <Navbar/>
   <Alert alert={alert} />
   <Routes>
            <Route exact path="/" element={<Hero/>}>
            </Route>
            <Route exact path="/home" element={<Home showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}>
            </Route>
          </Routes>
   </Router>
   </NoteState>
   </>
  );
}
export default App