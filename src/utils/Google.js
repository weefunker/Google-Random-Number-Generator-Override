const checkForGenerator = (element) => {
  // Multiple strategies to detect Google's RNG
  const selectors = [
    '[class*="randomnumber"]',
    '[data-attrid*="random"]',
    '[aria-label*="random number"]',
    '[aria-label*="Random number"]',
    'div[role="button"][aria-label*="Generate"]'
  ];
  
  for (const selector of selectors) {
    if (element.querySelector(selector)) {
      console.log('RNG detected with selector:', selector);
      return true;
    }
  }
  
  // Fallback: look for text content
  const textElements = element.querySelectorAll('div, span, button');
  for (const el of textElements) {
    const text = el.textContent?.toLowerCase() || '';
    if (text.includes('random number') || text.includes('generate') && text.includes('number')) {
      console.log('RNG detected by text content:', text);
      return true;
    }
  }
  
  return false;
}

const getGeneratorContainer = () => {
  console.log('Searching for RNG container...');
  
  // Strategy 1: Look for elements with RNG-related attributes
  const attributeSelectors = [
    '[class*="randomnumber"]',
    '[data-attrid*="random"]',
    '[aria-label*="random number"]',
    '[aria-label*="Random number"]'
  ];
  
  for (const selector of attributeSelectors) {
    const element = document.querySelector(selector);
    if (element) {
      // Find the appropriate container (usually a parent div)
      let container = element;
      while (container && container.tagName !== 'BLOCK-COMPONENT' && container.parentElement) {
        if (container.classList.contains('g') || 
            container.classList.contains('kp-blk') ||
            container.getAttribute('data-attrid')) {
          break;
        }
        container = container.parentElement;
      }
      console.log('Found container via attribute selector:', selector, container);
      return container;
    }
  }
  
  // Strategy 2: XPath patterns for different Google layouts
  const xpathPatterns = [
    '//block-component[contains(@class, "randomnumber") or contains(@data-attrid, "random")]',
    '//div[contains(@class, "kp-blk")]//div[contains(text(), "random number") or contains(text(), "Random number")]/..',
    '//div[@role="button" and contains(@aria-label, "Generate")]/../..',
    '//*[contains(@class, "randomnumber")]/..',
    '//block-component'
  ];
  
  for (const xpath of xpathPatterns) {
    try {
      const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      if (result.singleNodeValue) {
        console.log('Found container via XPath:', xpath, result.singleNodeValue);
        return result.singleNodeValue;
      }
    } catch (e) {
      console.warn('XPath failed:', xpath, e);
    }
  }
  
  // Strategy 3: Search by text content and find parent container
  const allDivs = document.querySelectorAll('div');
  for (const div of allDivs) {
    const text = div.textContent?.toLowerCase() || '';
    if ((text.includes('random number') || (text.includes('generate') && text.includes('number'))) &&
        div.children.length > 0) {
      // Find appropriate parent container
      let container = div;
      while (container && container.parentElement) {
        if (container.classList.contains('g') || 
            container.classList.contains('kp-blk') ||
            container.tagName === 'BLOCK-COMPONENT') {
          break;
        }
        container = container.parentElement;
      }
      console.log('Found container via text search:', container);
      return container;
    }
  }
  
  console.error('Could not find RNG container');
  return null;
}

const copyGoogleStyles = (originalElement) => {
  if (!originalElement) return {};
  
  const computedStyles = window.getComputedStyle(originalElement);
  const stylesToCopy = [
    'font-family', 'font-size', 'font-weight', 'color',
    'background-color', 'border', 'border-radius', 'padding',
    'margin', 'box-shadow', 'text-align', 'line-height'
  ];
  
  const copiedStyles = {};
  stylesToCopy.forEach(prop => {
    copiedStyles[prop] = computedStyles.getPropertyValue(prop);
  });
  
  console.log('Copied styles from Google element:', copiedStyles);
  return copiedStyles;
}

const findRNGElements = () => {
  const elements = {
    generateButton: null,
    numberDisplay: null,
    minInput: null,
    maxInput: null,
    container: null
  };
  
  // Find generate button
  const buttonSelectors = [
    'div[role="button"][aria-label*="Generate"]',
    'button[aria-label*="Generate"]',
    'div[role="button"]:has-text("Generate")',
    '*[onclick*="generate" i]'
  ];
  
  for (const selector of buttonSelectors) {
    try {
      elements.generateButton = document.querySelector(selector);
      if (elements.generateButton) break;
    } catch (e) {}
  }
  
  // Find number display (usually the largest number visible)
  const numberElements = document.querySelectorAll('span, div');
  for (const el of numberElements) {
    const text = el.textContent?.trim();
    if (text && /^\d+$/.test(text) && text.length <= 10) {
      const fontSize = parseFloat(window.getComputedStyle(el).fontSize);
      if (fontSize > 20) { // Likely the main number display
        elements.numberDisplay = el;
        break;
      }
    }
  }
  
  // Find min/max inputs
  const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
  for (const input of inputs) {
    const label = input.getAttribute('aria-label')?.toLowerCase() || '';
    const placeholder = input.getAttribute('placeholder')?.toLowerCase() || '';
    
    if (label.includes('min') || placeholder.includes('min')) {
      elements.minInput = input;
    } else if (label.includes('max') || placeholder.includes('max')) {
      elements.maxInput = input;
    }
  }
  
  console.log('Found RNG elements:', elements);
  return elements;
}

export {
  getGeneratorContainer,
  checkForGenerator,
  copyGoogleStyles,
  findRNGElements
}
