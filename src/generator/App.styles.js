import styled from 'styled-components';

const Container = styled.div`
  font-family: ${props => props.googleStyles?.fontFamily || 'arial,sans-serif'};
  background-color: ${props => props.googleStyles?.backgroundColor || '#fff'};
  border-radius: ${props => props.googleStyles?.borderRadius || '8px'};
  padding: 0;
  box-shadow: ${props => props.googleStyles?.boxShadow || '0 1px 6px rgba(32,33,36,.28)'};
  margin: 8px 0;
  width: 700px;
  height: 500px;
  overflow: hidden;
`

const RNGSection = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #dadce0;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 32px 0;
  gap: 24px;
`

export { Container, DisplayContainer, RNGSection };