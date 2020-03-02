import styled from 'styled-components';

export const CardPokemon = styled.div`
    width: 20%;
    align-items: center;
    display: flex;
    flex-direction: column;
    border: 2px solid;
    margin: 20px;
    background: #ff4236;
    border-radius: 6px;
    box-shadow: 0px 0px 11px 0px rgba(255,255,255,0.8);

@media screen and (max-width: 767px){
  width: 42%;
  margin: 20px 10px;
}

button{
    width: 100%;
    height: 35px;
    border: 0;
    display: flex;
    justify-content: center;
    cursor: pointer;
    }
`;

export const CardName = styled.div`

p{
    color: #000;
    font-size: 25px;
    font-weight: 600;
}
`;

export const CardInfo = styled.div`
display: flex;
widows: 150px;

p.title {
    color: #000;
    font-weight: 600;
    margin-right: 8px;
}
`;

export const CardDetail = styled.div`
  margin: 25px 0;
`;
