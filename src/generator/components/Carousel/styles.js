import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const ExpandableSection = styled.div`
  border-top: 1px solid #dadce0;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #dadce0;
  background-color: #f8f9fa;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 16px;
  font-size: 11px;
  font-weight: 500;
  color: ${props => props.active ? '#1a73e8' : '#5f6368'};
  cursor: pointer;
  border-bottom: ${props => props.active ? '2px solid #1a73e8' : '2px solid transparent'};
  transition: all 0.2s ease;
  font-family: arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background-color: #f1f3f4;
    color: #1a73e8;
  }

  &:focus {
    outline: none;
  }
`;

export const CarouselContent = styled.div`
  padding: 20px 24px;
  background-color: #fff;
  height: 160px;
  overflow: hidden;
`;

export const CarouselGrid = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 8px 4px;
  scroll-behavior: smooth;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const CarouselItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #202124;
  padding: 16px;
  border-radius: 8px;
  transition: background-color 0.2s ease;
  min-width: 140px;
  flex-shrink: 0;

  &:hover {
    background-color: #f8f9fa;
    text-decoration: none;
    color: #1a73e8;
  }

  &:visited {
    color: #202124;
  }

  &:hover:visited {
    color: #1a73e8;
  }
`;

export const ItemIcon = styled.img`
  width: 96px;
  height: 96px;
  margin-bottom: 12px;
  border-radius: 8px;
  object-fit: contain;
`;

export const ItemLabel = styled.div`
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  font-family: arial, sans-serif;
  color: inherit;
  word-wrap: break-word;
  max-width: 100%;
  white-space: nowrap;
`;

export const ToggleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  background-color: #f8f9fa;
  border-top: 1px solid #dadce0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
  }

  span {
    font-size: 13px;
    color: #5f6368;
    font-family: arial, sans-serif;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Footer = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #dadce0;
  background-color: #f8f9fa;
  text-align: center;
`;

export const FeedbackLink = styled.a`
  font-size: 12px;
  color: #1a73e8;
  text-decoration: none;
  font-family: arial, sans-serif;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #1a73e8;
  }
`;