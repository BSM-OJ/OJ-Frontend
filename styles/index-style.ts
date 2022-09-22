import styled from "styled-components";
import theme from "./theme";

export const Title = styled.h3`
  color: white;
  font-size: 3.4vh;
  font-weight: 400;
`;

export const ProblemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Level = styled.div`
  width: 4vw;
  min-width: 50px;
  height: 3.2vh;
  color: white;
  font-size: 14px;

  text-align: center;
  border-radius: 3.2vh;
  line-height: 3.2vh;
`;

export const Container = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 30px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Problem = styled.div`
  min-width: 200px;
  margin: 10px;
  padding: 16px;
  box-sizing: border-box;
  height: 13vh;
  background-color: #333333;
  border: 2px solid white;
  border-radius: 2vh;
`;

export const CompleteButton = styled.div`
  width: 4vw;
  min-width: 50px;
  height: 3vh;
  background-color: #7494ab;
  border-radius: 8px;
  line-height: 3vh;
  text-align: center;
  font-size: 14px;
  color: white;
`;

export const Content = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 300;
`;
