// This script creates placeholder SVG icons that can be converted to PNG
// You can replace these with your actual downloaded PNG icons

const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src/generator/components/Carousel/icons');

// Ensure icons directory exists
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icon definitions with colors and shapes
const icons = {
  // Games and Toys
  'block_breaker.png': { color: '#ff6b6b', shape: 'rect' },
  'im_feeling_curious.png': { color: '#4ecdc4', shape: 'circle' },
  'solitaire.png': { color: '#45b7d1', shape: 'diamond' },
  'snake.png': { color: '#96ceb4', shape: 'snake' },
  'pacman.png': { color: '#feca57', shape: 'pacman' },
  'tic_tac_toe.png': { color: '#ff9ff3', shape: 'grid' },
  'minesweeper.png': { color: '#54a0ff', shape: 'mine' },
  'crossword.png': { color: '#5f27cd', shape: 'crossword' },
  'word_coach.png': { color: '#00d2d3', shape: 'book' },
  'doodle_champion.png': { color: '#ff6348', shape: 'trophy' },
  'basketball.png': { color: '#ff7675', shape: 'ball' },
  'cricket.png': { color: '#a29bfe', shape: 'bat' },

  // Tools
  'color_picker.png': { color: '#fd79a8', shape: 'palette' },
  'metronome.png': { color: '#fdcb6e', shape: 'metronome' },
  'dice.png': { color: '#6c5ce7', shape: 'dice' },
  'spinner.png': { color: '#a29bfe', shape: 'spinner' },
  'flip_a_coin.png': { color: '#fd79a8', shape: 'coin' },
  'calculator.png': { color: '#00b894', shape: 'calculator' },
  'stopwatch.png': { color: '#e17055', shape: 'stopwatch' },
  'timer.png': { color: '#0984e3', shape: 'timer' },
  'unit_converter.png': { color: '#00cec9', shape: 'arrows' },
  'currency_converter.png': { color: '#00b894', shape: 'dollar' },
  'qr_code.png': { color: '#2d3436', shape: 'qr' },
  'password_generator.png': { color: '#636e72', shape: 'key' }
};

// SVG template function
function createSVG(color, shape) {
  const baseTemplate = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="8" fill="${color}"/>
  ${getShapeElement(shape)}
</svg>`;
  return baseTemplate;
}

function getShapeElement(shape) {
  switch (shape) {
    case 'rect':
      return '<rect x="12" y="12" width="16" height="16" rx="2" fill="white"/>';
    case 'circle':
      return '<circle cx="20" cy="20" r="8" fill="white"/>';
    case 'diamond':
      return '<path d="M20 12L28 20L20 28L12 20L20 12Z" fill="white"/>';
    case 'snake':
      return '<path d="M12 16C12 16 16 12 20 16C24 20 28 16 28 16V24C28 24 24 28 20 24C16 20 12 24 12 24V16Z" fill="white"/>';
    case 'pacman':
      return '<path d="M20 12C26 12 28 18 28 20C28 22 26 28 20 28C20 24 24 20 20 20C24 20 20 16 20 12Z" fill="white"/>';
    case 'grid':
      return '<g fill="white"><rect x="12" y="12" width="4" height="4"/><rect x="18" y="12" width="4" height="4"/><rect x="24" y="12" width="4" height="4"/><rect x="12" y="18" width="4" height="4"/><rect x="18" y="18" width="4" height="4"/><rect x="24" y="18" width="4" height="4"/><rect x="12" y="24" width="4" height="4"/><rect x="18" y="24" width="4" height="4"/><rect x="24" y="24" width="4" height="4"/></g>';
    case 'mine':
      return '<circle cx="20" cy="20" r="6" fill="white"/><circle cx="20" cy="20" r="2" fill="#333"/>';
    case 'crossword':
      return '<g fill="white"><rect x="14" y="12" width="2" height="16"/><rect x="12" y="18" width="16" height="2"/></g>';
    case 'book':
      return '<path d="M14 12H26C27 12 28 13 28 14V26C28 27 27 28 26 28H14C13 28 12 27 12 26V14C12 13 13 12 14 12Z" fill="white"/><line x1="20" y1="16" x2="20" y2="24" stroke="#333" stroke-width="1"/>';
    case 'trophy':
      return '<path d="M16 12H24V18C24 20 22 22 20 22C18 22 16 20 16 18V12Z" fill="white"/><rect x="18" y="22" width="4" height="4" fill="white"/><rect x="16" y="26" width="8" height="2" fill="white"/>';
    case 'ball':
      return '<circle cx="20" cy="20" r="8" fill="white"/><path d="M12 20C16 16 24 16 28 20" stroke="#333" stroke-width="1" fill="none"/><path d="M20 12C20 16 20 24 20 28" stroke="#333" stroke-width="1"/>';
    case 'bat':
      return '<rect x="18" y="12" width="4" height="12" rx="2" fill="white"/><ellipse cx="20" cy="26" rx="6" ry="2" fill="white"/>';
    case 'palette':
      return '<circle cx="20" cy="20" r="8" fill="white"/><circle cx="18" cy="16" r="1.5" fill="#ff6b6b"/><circle cx="22" cy="16" r="1.5" fill="#4ecdc4"/><circle cx="16" cy="22" r="1.5" fill="#45b7d1"/><circle cx="24" cy="22" r="1.5" fill="#feca57"/>';
    case 'metronome':
      return '<path d="M20 12L24 28H16L20 12Z" fill="white"/><circle cx="20" cy="16" r="2" fill="#333"/>';
    case 'dice':
      return '<rect x="12" y="12" width="16" height="16" rx="2" fill="white"/><circle cx="16" cy="16" r="1" fill="#333"/><circle cx="20" cy="20" r="1" fill="#333"/><circle cx="24" cy="24" r="1" fill="#333"/>';
    case 'spinner':
      return '<circle cx="20" cy="20" r="8" fill="white"/><path d="M20 12V20L26 16" fill="#333"/>';
    case 'coin':
      return '<circle cx="20" cy="20" r="8" fill="white"/><text x="20" y="24" text-anchor="middle" font-size="8" fill="#333">$</text>';
    case 'calculator':
      return '<rect x="14" y="12" width="12" height="16" rx="2" fill="white"/><rect x="16" y="14" width="8" height="3" fill="#333"/><g fill="#333"><circle cx="17" cy="19" r="0.5"/><circle cx="20" cy="19" r="0.5"/><circle cx="23" cy="19" r="0.5"/><circle cx="17" cy="22" r="0.5"/><circle cx="20" cy="22" r="0.5"/><circle cx="23" cy="22" r="0.5"/></g>';
    case 'stopwatch':
      return '<circle cx="20" cy="22" r="8" fill="white"/><circle cx="20" cy="16" r="2" fill="white"/><path d="M20 22V18" stroke="#333" stroke-width="2"/><path d="M20 22L24 20" stroke="#333" stroke-width="1"/>';
    case 'timer':
      return '<circle cx="20" cy="20" r="8" fill="white"/><path d="M20 20V14" stroke="#333" stroke-width="2"/><path d="M20 20L24 24" stroke="#333" stroke-width="1"/>';
    case 'arrows':
      return '<g fill="white"><path d="M12 18L18 12L18 16H22V14L28 20L22 26V24H18V28L12 22V18Z"/></g>';
    case 'dollar':
      return '<circle cx="20" cy="20" r="8" fill="white"/><text x="20" y="24" text-anchor="middle" font-size="10" fill="#333">$</text>';
    case 'qr':
      return '<g fill="white"><rect x="12" y="12" width="6" height="6"/><rect x="22" y="12" width="6" height="6"/><rect x="12" y="22" width="6" height="6"/><rect x="20" y="20" width="2" height="2"/><rect x="24" y="20" width="2" height="2"/><rect x="22" y="24" width="2" height="2"/></g>';
    case 'key':
      return '<path d="M12 20C12 16 16 12 20 12C24 12 28 16 28 20C28 24 24 28 20 28H16V24H12V20Z" fill="white"/><circle cx="22" cy="18" r="2" fill="#333"/>';
    default:
      return '<circle cx="20" cy="20" r="6" fill="white"/>';
  }
}

// Create SVG files
Object.entries(icons).forEach(([filename, { color, shape }]) => {
  const svgContent = createSVG(color, shape);
  const svgFilename = filename.replace('.png', '.svg');
  const filepath = path.join(iconsDir, svgFilename);
  
  fs.writeFileSync(filepath, svgContent);
  console.log(`Created ${svgFilename}`);
});

console.log(`\nCreated ${Object.keys(icons).length} placeholder icons in ${iconsDir}`);
console.log('You can replace these SVG files with your actual PNG icons.');
console.log('Make sure to keep the same filenames for the icons to work properly.');