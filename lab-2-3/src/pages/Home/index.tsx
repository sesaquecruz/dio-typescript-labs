import { useNavigate } from "react-router-dom";

import Title from "../../components/Title";
import { 
  Container, 
  Content, 
  Button
} from "./styles";

export default function HomePage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  return (
    <Container>
      <Content>
        <Title />
        <Button onClick={handleLogin}>Login</Button>
      </Content>
    </Container>
  );
}
