import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './Context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
   <>
   <NoteState>
   <Router>
   <Navbar/>
   <Alert message="This is amazing react course"/>
   <Routes>
            <Route exact path="/home" element={<Home/>}>
            </Route>
            <Route exact path="/about" element={<About/>}>
            </Route>
          </Routes>
   </Router>
   </NoteState>
   </>
  );
}
export default App