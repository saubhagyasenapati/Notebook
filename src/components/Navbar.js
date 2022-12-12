import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import {
    Link,useLocation,useNavigate
  } from "react-router-dom";

const Navbar = () => {
  let navigate=useNavigate();
  const [user, setUser] = useState([]);
  useEffect(() => {
  
    if (localStorage.getItem("token")) {
      const userdetails = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const detail = await response.json();
        setUser(detail);
      };
      userdetails();
    }
  }, []);

  const handleLogout=()=>
  {
    localStorage.removeItem('token');
    navigate('/login');
  }
  
  let location = useLocation();
  return (
   <>
   <Section>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid"> 
    <Link className="navbar-brand" to="/">NoteBook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> 
          <Link className={`nav-link ${location.pathname==="/home"? "active":""}`} aria-current="page" to="/home">Notes</Link>
        </li>   
        <li className="nav-item">
          <Link className= {`nav-link ${location.pathname==="/about"? "active":""}`} aria-current="page" to="/about">About</Link>
        </li>     
      </ul>
      
      {!localStorage.getItem('token')?<form className="d-flex ">
       
        <Link className="btn btn-info mx-1" type="submit" to="/Login">Login</Link>
        <Link className="btn btn-info mx-1" type="submit" to="/SignUp">Sign Up</Link>
      </form>:<div className='logout'><h5>{user.name}</h5><button className='btn btn-primary mx-3' onClick={handleLogout}>Logout</button></div>}
    </div>
  </div>
</nav>
   </Section>
     
  
   </>
  )
}

export default Navbar

const Section=styled.section`
 height:5vh ;
 width:100vw;
 .logout{
  display:inline-flex ;
  
  align-items:center ;
  h5{
   margin-top:6px ;
  color:white ;
  align-items:center ;
  margin-right:10px ;
 }
 }

`