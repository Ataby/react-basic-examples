import { Button,TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled"
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/styledLink";

const App = function () {

  return (
    <>
    <Container bg="green" >
      <HeaderText> Styled Components</HeaderText>
      <Button>CLICK</Button>
      <Button primary >SAVE</Button>
      <TomatoButton> DELETE </TomatoButton>
      <TomatoButton primary> DELETE </TomatoButton>
      <StyledLink href="https://github.com/Ataby/" target="_blank"> Github Link</StyledLink>
      <StyledLink secondary href="https://github.com/Ataby/" target="_blank"> Github Link</StyledLink>


      {/* <Button primary={primary}>SAVE</Button> */}
    </Container>
    </>
  );
}

export default App;
