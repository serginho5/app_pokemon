import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 justify-content: center;
`;

export const Content = styled.div`
  margin: 20px;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 1024px;
  max-width: 100%;
  background: #161616;

`;

export const CardMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    width: 1024px;
    justify-content: center;

@media screen and (max-width: 767px){
  width: 480px;
}
`;

export const ContentButton = styled.div`
    display: flex;
    justify-content: space-evenly;

button {
    background: #ff4236;
    padding: 8px 24px;
    color: #000;
    font-weight: 800;
    border: 0;
    cursor: pointer;
}
`;

