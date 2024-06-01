# Random Number Generator Overlay
A simple React.js overlay for Google's built-in Random Number Generator.

It offers the option to run the generator and display a Target Number. To do that, simply set the number in the Popup and run the generator with the `Shift` key pressed.

Please note that if no number is set on the Popup, running it with `Shift` will simply default to a random number.

Also, when running the app with `Shift`, it takes no notice of the **Min** and **Max** values set and simply goes straight to the Target Number.

## How To Build The App
Inside the source directory, install all the neccessary dependencies with:

    npm install

Next, build the app with:

    npm run build

After the build, the significant files for packing are the following:

- The `/dist` directory;
- The `manifest.json` file;
- The `icon.png` image.

You can manually pack them into a `.zip` file and load them directly into the Browser.

To load it with Chrome follow these steps:

- Open the `chrome://extensions` link;
- Toggle `Developer Mode` in the top right corner;
- Click `Load packed` and select the `.zip` file;
- If you haven't packed the files, click `Load unpacked` and select the source directory.

See [this link](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) for how to temporarily load an extension on Firefox.