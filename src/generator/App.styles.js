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
  position: relative;
`

const ShareIcon = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.54;
  
  &:hover {
    opacity: 0.87;
  }
`;

const RNGSection = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #dadce0;
  height: auto;
  display: flex;
  flex-direction: column;
`

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 24px;
`

export { Container, DisplayContainer, RNGSection, ShareIcon };