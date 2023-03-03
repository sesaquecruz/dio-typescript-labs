import { Link } from "react-router-dom"
import { Title as TitleStyle } from "./styles"

export default function Title() {
  return (
    <Link to="/" style={{textDecoration: "none"}}>
      <TitleStyle>
        The Bank!
      </TitleStyle>
    </Link>
  )
}
