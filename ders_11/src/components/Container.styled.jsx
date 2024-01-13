import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({bg})=> bg || "grey"};
`;

export default Container;
