import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  height: 50px !important;
  min-height: 50px;
  max-height: 50px;
  width: 655px;
  margin: 0 auto;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  font-family: arial, sans-serif;
  line-height: 1;

  background-color: #1a73e8;
  border: none;
  padding: 0;

  user-select: none;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #1557b0;
    box-shadow: 0 1px 2px rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  }

  &:active {
    background-color: #1557b0;
    box-shadow: 0 1px 2px rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
  }
`

export { Container };