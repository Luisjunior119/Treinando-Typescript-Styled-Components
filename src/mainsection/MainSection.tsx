import { Button, Container, ContentOne, Description, Fox, Title } from "./MainSection.styles"

import Foxzinha from "../assets/image 1 (1).svg"

const MainSection = () => {
  return (
    <Container>

      <ContentOne>

      <Title>
        Love and kindness are never wasted.
      </Title>

      <Description>
        We help around 100,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.
      </Description>

      <Button>
        Join Us
      </Button>

      </ContentOne>

      <Fox>
        <img src={Foxzinha} alt="imgfox"
        width={860} height={796}/>
      </Fox>

    </Container>
  )
}

export default MainSection