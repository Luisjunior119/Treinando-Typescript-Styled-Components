import styled from "styled-components";

export const Container = styled.div`

  display:flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.div`
  width: 111px;
  height: 31px;
  cursor: pointer;
`;

export const ContentNav = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  font-weight: 600;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;


export const Navlinks = styled.a`
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  color: #000;
  &:hover::before,
  &:hover::after {
    width: 50%;
  }
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -2px;
    height: 2px;
    background-color: #000;
    transition: all 0.55s ease;
    width: 0;
  }
  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
  
`;

export const Button = styled.button`
  width: 130px;
  height: 43px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.75s;
  font-weight: 600;
  
  
  &:hover{
    background-color: #13390D;
    color: #fff;
    border: #13390D;


  };

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;


