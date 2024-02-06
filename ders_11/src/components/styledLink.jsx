import styled ,{css} from "styled-components";

const StyledLink = styled.a`
  font-size: 2.5rem;
  text-decoration: none;
  &:hover{
    opacity: .5;
  }

  ${(props)=>
    props.secondary && css`
    background-color: lightblue;
    padding: .3rem;
    color: crimson;
    //'SECONDARY' PROP'U ICEREN COMPONENTLERE (BU OZELLIK SAYESINDE) TOPLU OLARAK STYLING VEREBILIRIZ.
    `
  }
`;

export default StyledLink;
