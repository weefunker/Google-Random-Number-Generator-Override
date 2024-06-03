import styled from 'styled-components';

const Container = styled.form`
  padding: 2rem;
  min-width: 400px;
  background-color: #22C55E; /* Added this to set the container's background color to green */
  border-radius: 10px; /* Optional: add some border-radius to match the styling */
`;

const Title = styled.h3`
  margin-bottom: 1rem;

  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;

  text-transform: capitalize;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;

  margin: auto;
  max-width: 600px;

  border: 1px solid #dfe1e5;
  border-radius: 30px;
  border-color: #EBEBEB;

  box-shadow: 0 1px 4px rgba(0, 13, 22, 0.3);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 1.5rem;

  border: none;
  border-radius: 30px;

  color: #202124;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;

  padding: 0.8rem 1.2rem;

  background-color: #22C55E; /* Changed this to the green color */
  border: none;
  border-radius: 30px;
  
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: white;

  user-select: none;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(34, 197, 94, 0.3), 0 1px 3px 1px rgba(34, 197, 94, 0.15);
    background-color: #1FA856;
    color: white;
  }

  &:active {
    box-shadow: 0 1px 2px 0 rgba(34, 197, 94, 0.3), 0 1px 3px 1px rgba(34, 197, 94, 0.15);
    background-color: #1C944F;
    color: white;
  }
`;

export {
  Container,
  Title,
  InputBox,
  Input,
  Button,
}