import styled from "styled-components";

export const ContestHold = styled.div`
  width: 80%;
    background-color: #34373c;
  color: #000;
  box-sizing: border-box;
  padding: 0 30px 0 30px;
  margin: 0 auto;
`;

export const Title = styled.input`
  background-color: #34373c;
  color: white;
  border: 0px;
  font-size: 24px;
  padding-bottom: 2vh;
  font-weight: 600;
  :focus {
    outline: none;
  }
`;

export const Line = styled.div`
  background-color: #34373c;
  width: 100%;
  margin: 5px auto;
  border-bottom: 2px solid #8e8e8f;
`;

export const Room = styled.div`
  color: #8e8e8f;
  display: flex;
  font-size: 17px;
  padding-left: 1vw;
`;

export const LRoom = styled.input`
  color: #8e8e8f;
  display: flex;
  font-size: 17px;
  padding-left: 1vw;
  background-color: #34373c;
  border: 0px;
  :focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Tcon = styled.div`
  width: 100%;
  display: flex;

  padding-top: 20px;
`;

export const SubTitle = styled.div`
  display: flex;
  color: white;
  font-size: 18px;
  padding-top: 16px;
`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  background-color: #ffd144;
  width: 500px;
  height: 50px;
  margin: 30px auto;

  line-height: 15px;
  border-radius: 10px;
  padding: 10px;
  color: white;
  border: 0;
`;

export const MidCt = styled.div`
  display: flex;
  align-items: center;
  .plus {
    display: flex;
    color: white;
    width: 14px;
    margin: 20px 0 20px 10px;
  }
`;

export const Time = styled.input`
  width: 70%;
  height: 0;
  padding: 14px;
  box-sizing: border-box;
  border: 1px solid white;
  background-color: #34373c;
  border-radius: 5px;
  color: white;
  font-size: 18px;
`;

export const Ttime = styled.div`
  color: white;
  display: flex;
  font-size: 18px;
  padding-right: 10px;
`;

export const TimeSet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 10px;
`;
