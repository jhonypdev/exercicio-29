import { Container, Navbar } from "react-bootstrap";
import LogoContainer from "./Logo";

const NavStore = () => {
  return (
    <Navbar>
      <Container>
        <LogoContainer />
      </Container>
    </Navbar>
  );
};

export default NavStore;
