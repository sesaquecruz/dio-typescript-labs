import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../components/Context";
import { Api } from "../../services/Api";

import Title from "../../components/Title";
import { 
  Container, 
  Content, 
  Button
} from "../Home/styles";

import {
  Input, 
  Message
} from "./styles";

export default function LoginPage() {
  const { auth, setAuth } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    auth.token && navigate("/account");
  }, [auth, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleContinue() {
    const api = new Api();
    
    api.getToken(email, password)
      .then((token) => setAuth({...auth, token: token}))
      .catch(() => setMessage("invalid credentials"));
  }

  return (
    <Container>
      <Content>
      <Title />

        <Input 
          placeholder="email" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          placeholder="password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {message && (<Message>{message}</Message>)}

        <Button onClick={handleContinue}>Continue</Button>
      </Content>
    </Container>
  );
}