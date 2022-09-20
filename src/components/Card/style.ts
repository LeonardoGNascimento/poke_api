import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffde20;
  border-radius: 30px;
  display: flex;
  margin: 1rem;
  flex-direction: column;
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 1px 10px 0 rgba(32, 33, 36, .28);
`;

export const CardTitle = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  justify-content: center;
  margin: auto;
`;

export const CardBody = styled.div`
  justify-content: center;
  margin: auto;
`;

export const CardFooter = styled.div`
  justify-content: center;
  margin: auto;
`;

export const CardArt = styled.img`
  width: 200px;
  height: 200px;
`;
