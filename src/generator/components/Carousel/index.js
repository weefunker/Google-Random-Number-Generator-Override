import React, { useState } from 'react';
import {
  CarouselContainer,
  ExpandableSection,
  TabsContainer,
  TabButton,
  CarouselContent,
  CarouselGrid,
  CarouselItem,
  ItemIcon,
  ItemLabel,
  ToggleBar,
  Footer,
  FeedbackLink
} from './styles';

const Carousel = () => {
  const [activeTab, setActiveTab] = useState('tools');
  const [isExpanded, setIsExpanded] = useState(true);

  // Essential tools only - horizontal scrolling
  const tools = [
    { name: 'Colour picker', href: '/search?q=Colour+picker', icon: 'color_picker.png' },
    { name: 'Metronome', href: '/search?q=Metronome', icon: 'metronome.png' },
    { name: 'Timer', href: '/search?q=Timer', icon: 'timer.png' },
    { name: 'Spinner', href: '/search?q=Spinner', icon: 'spinner.png' },
    { name: 'Flip a coin', href: '/search?q=Flip+a+coin', icon: 'flip_a_coin.png' },
    { name: 'Calculator', href: '/search?q=Calculator', icon: 'calculator.png' }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to get icon source with fallbacks
  const getIconSrc = (iconName) => {
    // Start with Google's official icons
    return `//www.google.com/logos/fnbx/more_funbox/${iconName}`;
  };

  // Default fallback icon
  const getDefaultIcon = (type = 'game') => {
    if (type === 'tool') {
      return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzRmOGFmMCIvPgo8cGF0aCBkPSJNMjAgMTJMMjggMjBMMjAgMjhMMTIgMjBMMjAgMTJaIiBmaWxsPSIjZmZmIi8+CjwvZz4KPC9zdmc+';
    }
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0iIzM0YTg1MyIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSI4IiBmaWxsPSIjZmZmIi8+CjwvZz4KPC9zdmc+';
  };

  const handleIconError = (e, type) => {
    // Fallback to default icon
    e.target.src = getDefaultIcon(type);
  };

  return (
    <CarouselContainer>
      <ExpandableSection>
        <TabsContainer>
          <TabButton
            active={activeTab === 'games'}
            onClick={() => handleTabClick('games')}
          >
            GAMES AND TOYS
          </TabButton>
          <TabButton
            active={activeTab === 'tools'}
            onClick={() => handleTabClick('tools')}
          >
            TOOLS
          </TabButton>
        </TabsContainer>

        {isExpanded && (
          <CarouselContent>
            {activeTab === 'tools' && (
              <CarouselGrid>
                {tools.map((item, index) => (
                  <CarouselItem key={index} href={item.href}>
                    <ItemIcon 
                      src={getIconSrc(item.icon)}
                      alt={item.name}
                      onError={(e) => handleIconError(e, 'tool')}
                    />
                    <ItemLabel>{item.name}</ItemLabel>
                  </CarouselItem>
                ))}
              </CarouselGrid>
            )}
            {activeTab === 'games' && <div />}
          </CarouselContent>
        )}

        <ToggleBar onClick={toggleExpanded}>
          <span>
            {isExpanded ? '▲' : '▼'} More games, toys and tools
          </span>
        </ToggleBar>
      </ExpandableSection>

      <Footer>
        <FeedbackLink href="#">Feedback</FeedbackLink>
      </Footer>
    </CarouselContainer>
  );
};

export default Carousel;