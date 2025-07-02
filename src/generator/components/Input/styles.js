import styled from 'styled-components';

const Container = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  line-height: 1.2;
  font-size: 14px;
  color: #5f6368;
  text-transform: capitalize;
  margin-bottom: 8px;
  font-family: arial, sans-serif;
`

const Field = styled.input`
  height: 40px;
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  font-family: arial, sans-serif;
  
  border: 1px solid #dadce0;
  border-radius: 4px;
  background-color: #fff;
  
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1a73e8;
    box-shadow: 0 1px 2px rgba(26,115,232,.3);
  }

  &:hover {
    border-color: #5f6368;
  }
`

export {
  Container,
  Label,
  Field
}