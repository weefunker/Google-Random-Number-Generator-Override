import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`

const Label = styled.div`
  line-height: 1.2;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  text-transform: capitalize;
`

const Field = styled.input`
  height: 30px;
  width: 180px;
  margin-bottom: 10px;

  font-size: 18px;

  border-radius: 0;
  border-color: #aaa;
  border-style: none;
  border-bottom-style: solid;
  border-bottom-width: 3px;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }
`

export {
  Container,
  Label,
  Field
}