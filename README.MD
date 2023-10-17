# The Super Awesome Weather App
## Overview
This is an example of an Weather Application developed as part of the Accelerated ES6 JavaScript Training course by Maximilian Schwarzmüller on UDEMY platform.

The course introduces you to the biggest "feature update" in the last couple of years: ES6 - which added a lot of new syntax features and improvements.

In the course, you will understand and Use the new Features and Concepts introduced with ES6, get an Overview over the Language Additions and Changes and apply the new Syntax, new APIs and other new Features in Web Applications

This project uses HTML, CSS and vanilla JavaScript, with some features of ES6 as Promises, Proxy and Reflect APIs.

To load the modules on the application, i'm using [SystemJS](https://github.com/systemjs/systemjs), and to transpile the ES6 to ES5 i'm using [Babel](https://babeljs.io/)

## Running the application
1. Clone this repository on your machine
2. Open the folder containing the project
3. Run `npm install` or `yarn install` to install the project dependencies
4. Create an freen account on [Open Weather Map](https://openweathermap.org/) website to get your own APPID
5. On the `src/app.js` file, change the content of `APPID` variable with your APPID and save the file
6. Run `npm run build` or `yarn build` to build the project
7. Open the `ìndex.html` file and enter a City name on the search bar, then click 'Show Weather!' button

OBS: If you use Visual Studio Code, i recommend that you use the [Live Server](https://github.com/ritwickdey/vscode-live-server) extension to run the project after building it.
