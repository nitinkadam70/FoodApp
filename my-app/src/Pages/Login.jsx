import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../contest/AuthProvider';
import { useLocation, useNavigate } from "react-router-dom";


const Form = styled.form`
border:none;
background
`;

const Input = styled.div`
margin-bottom:20px;
`;

const Login = () => {
  const { token, handleLogin } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/cart";


  const handleSubmit = (event) => {
    event.preventDefault()
    handleLogin(email, password);
  }

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token]);



  return (
    <div style={{ display: "flex", flexFlow: "column", marginTop: "40px" }}>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit}>
        <Input>
          <label>Username : </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Input>
        <Input>
          <label>Password : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Input>
        <Input>
          <input style={{ borderRadius: "10px", padding: "10px 25px", background: "blue", color: "white", fontWeight: "bold" }} type="submit" value="Login" />
        </Input>

      </Form>

    </div>
  )
}

export default Login