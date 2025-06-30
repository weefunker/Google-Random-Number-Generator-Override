# Chrome Extension Installation Guide

## Quick Install (2 minutes)

### Step 1: Open Chrome Extensions
1. Open Chrome browser
2. Go to `chrome://extensions/`
3. Toggle **Developer mode** ON (top right)

### Step 2: Load Extension
1. Click **"Load unpacked"**
2. Navigate to this project folder
3. Select the `dist/` folder
4. Click **"Select Folder"**

### Step 3: Test
1. Go to Google.com
2. Search for "random number generator"
3. You should see the enhanced RNG interface
4. Click the extension icon to manage target numbers

## Features

### Normal Mode
- Set min/max values
- Click "Generate" for random numbers

### Target Mode  
- Add target numbers via popup
- Hold **Shift + Click "Generate"** to use targets
- Targets are used in order (queue system)

### Target Management
- Click extension icon to open popup
- Add new targets
- Edit existing targets (double-click)
- Delete targets
- Drag to reorder

## Troubleshooting

### Extension Not Loading
- Make sure you selected the `dist/` folder, not the root folder
- Check Chrome console for errors (F12)

### RNG Not Detected
- Make sure you're on a Google search results page
- Search specifically for "random number generator"
- Check browser console for detection logs

### Targets Not Working
- Make sure to hold Shift while clicking Generate
- Check that targets are added in the popup
- Verify storage permissions are granted

## Development

### Build from Source
```bash
npm install
npm run build
```

### File Structure
```
dist/
├── manifest.json      # Extension manifest
├── index.bundle.js    # Content script
├── icon.png          # Extension icon
└── popup/
    ├── index.html    # Popup interface
    └── index.bundle.js # Popup script
```