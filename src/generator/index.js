import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as Google from '../utils/Google';

// Enhanced initialization with retry logic
const initializeRNGOverlay = () => {
  console.log('Initializing RNG Overlay...');
  
  if (Google.checkForGenerator(document)) {
    const container = Google.getGeneratorContainer();
    
    if (container) {
      console.log('Found RNG container, mounting React app...');
      
      // Store original styles for reference
      const originalElements = Google.findRNGElements();
      if (originalElements.container) {
        window.googleRNGStyles = Google.copyGoogleStyles(originalElements.container);
      }
      
      // Mount React app
      ReactDOM.render(<App originalElements={originalElements} />, container);
    } else {
      console.warn('RNG detected but container not found, retrying...');
      setTimeout(initializeRNGOverlay, 1000);
    }
  } else {
    console.log('No RNG detected on this page');
  }
};

// Try immediately
initializeRNGOverlay();

// Also try after DOM changes (Google uses dynamic loading)
const observer = new MutationObserver((mutations) => {
  let shouldRetry = false;
  
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Check if any added nodes contain RNG-related content
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const text = node.textContent?.toLowerCase() || '';
          if (text.includes('random number') || text.includes('generate')) {
            shouldRetry = true;
            break;
          }
        }
      }
    }
  });
  
  if (shouldRetry && Google.checkForGenerator(document)) {
    console.log('DOM changed, re-checking for RNG...');
    observer.disconnect();
    setTimeout(initializeRNGOverlay, 500);
  }
});

// Observe DOM changes for 10 seconds
observer.observe(document.body, {
  childList: true,
  subtree: true
});

setTimeout(() => {
  observer.disconnect();
  console.log('Stopped observing DOM changes');
}, 10000);
