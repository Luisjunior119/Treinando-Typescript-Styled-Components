import { Button, Container, ContentNav, Logo, Navlinks } from "./Header.styles"
import FotoLogo from "../assets/Logo.svg"

const Header = () => {
  return (
    <Container>
      
      <Logo>
        <img src={FotoLogo} alt="Logozinha" />
      </Logo>

      <ContentNav>

      <Navlinks>Home</Navlinks>
      <Navlinks>About Us</Navlinks>
      <Navlinks>Locations</Navlinks>
      <Navlinks>FAQ's</Navlinks>

      <Button>
        Contact Us
      </Button>
      
      </ContentNav>

    </Container>
  )
}

export default Header