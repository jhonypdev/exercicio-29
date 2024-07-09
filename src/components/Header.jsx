import { Container, Nav } from "react-bootstrap";
import NavStore from "./NavStore";

const Header = () => {
  return (
    <header id="hg_300" class="header">
      <Container>
        <NavStore />
      </Container>
    </header>
  );
};

export default Header;
