import styled from 'styled-components';

import Trashcan from './img/Trashcan.png';
import Hamburguer from './img/Hamburguer.png';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: #EFEFEF;
`;

const Grabber = styled.div`
  margin: auto 0;
  height: 1.25rem;
  width: 1.25rem;

  background: url(${Hamburguer});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ContentContainer = styled.form`
  width: 100%;
`;

const Content = styled.input`
  width: 100%;
  padding: 0.5rem;

  background: none;
  border: 1px solid #EFEFEF;
  border-radius: 4px;

  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #414141;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:read-only {
    border: 1px solid #EFEFEF;
    background: none;
  }
`;

const DeleteButton = styled.div`
  display: inline-block;
  cursor: pointer;

  margin: auto 0;
  height: 1.5rem;
  width: 1.5rem;
  
  background: url(${Trashcan});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export {
  Item,
  Grabber,
  ContentContainer,
  Content,
  DeleteButton
};