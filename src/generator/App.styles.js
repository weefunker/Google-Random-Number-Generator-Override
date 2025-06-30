import styled from 'styled-components';

const Container = styled.div`
  font-family: ${props => props.googleStyles?.fontFamily || 'arial,sans-serif'};
  background-color: ${props => props.googleStyles?.backgroundColor || '#fff'};
  border-radius: ${props => props.googleStyles?.borderRadius || '8px'};
  padding: 16px;
  box-shadow: ${props => props.googleStyles?.boxShadow || '0 1px 6px rgba(32,33,36,.28)'};
  margin: 8px 0;
  max-width: 400px;
`

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 16px 16px 16px;
  gap: 16px;
`

export { Container, DisplayContainer };