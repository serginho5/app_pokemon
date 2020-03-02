import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
    width: 295px;
}

h1 {
  color: #fff;
  font-weight: 400;
  font-size: 22px;
}

`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;


input {
  flex: 1;
  height: 40px;
  padding: 0 20px;
  background: #fff;
  font-size: 18px;
  color: #444;
  border-radius: 3px;
  border: ${props => (props.withError ? '2px solid #f00' : 0)};
}

button {
  width: 50px;
  height: 40px;
  padding: 0 10px;
  margin-left: 5px;
  background: #ff4236;
  color: #fff;
  border: 0;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;

  &:hover{
    background: #52d89f;
  }
}
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
