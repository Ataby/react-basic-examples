//STYLED COMPONENTS => REACT COMPONENTLERINE CSS ENTEGRE ISLEMI
import styled from "styled-components";

export const Button = styled.button`
background-color:${(props)=>(props.primary ? "purple" : "white")} ;
color:${(props)=>(props.primary ? "white" : "purple")} ;
font-size:${(props)=>(props.primary ? "larger" : "small")} ;
border-color:${({primary})=>(primary ? "white" : "purple")} ;

width: 8rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
cursor: pointer;
padding: 1rem 1.5rem;
border-radius: 0.5rem;

&:hover{
    transform:${({primary})=>(primary ? "scale(1.05)" : "scale(.95)")} ;
}
`;

export const TomatoButton =styled(Button)`
background-color:${({primary})=>(primary ? "white" : "tomato")} ;
color:${({primary})=>(primary ? "tomato" : "white")} ;
border-color:${({primary})=>(primary ? "tomato" : "white")} ;

`;