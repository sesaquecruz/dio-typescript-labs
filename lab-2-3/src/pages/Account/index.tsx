import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../components/Context";
import { Api } from "../../services/Api";
import User from "../../models/User";
import Account from "../../models/Account";

import Title from "../../components/Title";
import { 
  Container, 
  Content, 
  Button
} from "../Home/styles";

import { 
  Panel, 
  Left,
  Right, 
  Text 
} from "./styles";

export default function AccountPage() {
  const { auth, setAuth} = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    !auth.token && navigate("/login");
  }, [auth, navigate])

  function handleLogout() {
    setAuth({
      token: ""
    });
  }

  const [user, setUser] = useState<User>({
    name: "loading"
  })

  const [account, setAccount] = useState<Account>({
    id: "loading",
    balance: 0,
    active: false
  })

  useEffect(() => {
    const api = new Api();
    
    Promise.all([api.getUser(auth.token), api.getAccount(auth.token)])
      .then((data) => {
        setUser(data[0]);
        setAccount(data[1]);
      })
      .catch(() => handleLogout())
  }, [])

  return (
    <Container>
      <Content>
        <Title />

        <Panel>
          <Left>
            <Text>User:</Text>
            <Text>Account:</Text>
            <Text>Balance:</Text>
            <Text>Status:</Text>
          </Left>
          <Right>
            <Text>{user.name}</Text>
            <Text>{account.id}</Text>
            <Text>{`$ ${account.balance}`}</Text>
            <Text>{(account.active) ? "OK" : "Blocked"}</Text>
          </Right>
        </Panel>

        <Button onClick={handleLogout}>Logout</Button>
      </Content>
    </Container>
  );
}
