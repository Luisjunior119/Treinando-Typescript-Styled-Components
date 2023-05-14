import { Container } from "./App.styles"
import Header from "./header/Header"
import MainSection from "./mainsection/MainSection"

const App = () => {
  return (
    <Container>
      <Header/>
      <MainSection/>
    </Container>
  )
}

export default App