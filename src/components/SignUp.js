import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const SignUp = (props) => {
  const [credentials, setCredentials] = useState({ name:"",email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/home");
      props.showAlert("Account Created Successfultty","success");
    } else {
        props.showAlert("Invalid credentials","danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <Section>
        <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            onChange={onChange}
           
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label alidationDefault03">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={onChange}
            minLength={5} required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={onChange}
            minLength={5} required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    </Section>

  );
};

export default SignUp;


const Section=styled.section`
height:100vh ;
width:100vw;
background: #1CD8D2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #93EDC7, #1CD8D2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #93EDC7, #1CD8D2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

display: flex;
justify-content: center;
align-items:center ;
h1{
  font-size:2.5rem ;
  font-weight:700 ;
  display: flex;
  justify-content: center;
  margin-bottom:2rem ;
}
label{
  font-size:2rem ;
  font-weight:700 ;
  display: flex;
  justify-content: center;
}

`