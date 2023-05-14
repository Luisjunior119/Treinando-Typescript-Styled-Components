import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContentOne = styled.div`
  display: grid;
  grid-column: 1;
  align-items: end;
  margin-top: 100px;
`;

export const Title = styled.div`
  width: 700px;
  height: 249px;

  font-size: 84px;

  font-weight: 800;

  color: #13390d;
`;

export const Description = styled.div`
  width: 600px;
  height: 33px;

  font-size: 24px;



  color: #13390d;
  margin-bottom: 20px;
`;


export const Button = styled.button`
  width: 200px;
  height: 60px;

  border-radius: 5px;
  margin-bottom: 30px;
  background-color: #13390d;
  color: #fff;
  font-size: 16px;
  align-items: center;
  transition: all 0.55s;
  cursor: pointer;

  &:hover{
    color: #d8d8d8;
  }
  
`;

export const Fox = styled.div`
  display: grid;
  grid-column: 2;

  width: 794px;
  height: 741px;

  margin-top: 100px;
`;


