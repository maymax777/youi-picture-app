# You.i Engine One React Native Picture App

## 1) Setup your Unsplash account and API keys

- https://unsplash.com/documentation#search-photos
- https://unsplash.com/developers
- https://unsplash.com/documentation#creating-a-developer-account

## 2) Build a search screen

- [x] Build a Screen that allows searching unsplash.com (Use this endpoint (GET /search/photos)).
- [x] Build this screen using JSX.
- [x] This screen is the application's first screen upon launching.
- [x] The screen contains a text input that allows entering a search term.
- [ ] The text input should be focused by default when navigating to this screen.
- [x] Upon a successful query result which returns one or more image, you will navigate to the next screen. Only scaffold this screen for now.
- [ ] Upon failure, display an error which states: "No Results Found".

## 3) Build a resuilt screen

- [x] You will build a screen that displays the results of the search in a Grid.
- [x] Build this screen using JSX.
      The Grid contains 4 items per row, and an indeterminate amount of rows.
- [x] Each item in the grid contains a thumbnail of the picture.
- [x] Each item in the grid also contains a description of the picture.
- [x] Upon navigating to this page, you must set focus on the Top Left item.
- [x] You must be able to navigate through the list of items, from left to right, and from top to bottom.
- [x] If there are elements out of screen, navigating to the bottom will scroll the page and reveal previously hidden elements
- [x] A currently focused item must have a highlighted border around it to indicate that it is focused.

## 4) Build a video playback screen

- [x] Build a Video Playback screen which uses the Player_VideoRef After Effects composition.
- [x] Set the VideoRef name to Video-Surface-View so that the correct composition can be retrieved.
- [x] Users can navigate to this screen from the Results screen, by clicking any result.
- [x] You will playback the following HLS Stream: The Durian Open Movie Project.
- [x] Load the Player_Playback-Controls After Effects composition after Player_VideoRef to add controls for the player.
- [x] When the user clicks a button, display the playback controls by animating both the composition and its children's In / Out timelines when showing / hiding the controls.
- [x] Update the play / pause button to change its visual state depending on whether the video is paused or not.
- [ ] When navigating back to the Results Screen, set focus on the original image you had originally clicked on.
- [x] Hook up the Placeholder-Time ViewRef to display a human readable formatted version of the current video time.
      Hook up the Btn-Back ButtonRef to navigate back to the previous screen.
- [ ] Use the FocusManager module to control the focus through React Navigation's NavigationEvents when navigating between screens or displaying the player controls.

## 5) Run the application on Android

![Image](/screenshot/screenshot_1.png?raw=true)
![Image](/screenshot/screenshot_2.png?raw=true)
![Image](/screenshot/screenshot_3.png?raw=true)

## 6) Self-paced stretch goals

---

# You.i Engine One React Native Template App

## Requirements

This project requires a local installation of the You.i Engine One SDK.
Use `youi-tv doctor` to see the basic required dependencies for the available platforms. See https://developer.youi.tv/ for more details and guides on installing the requirements.

## Contents

    __tests__/appium/

This is a directory containing example Appium tests. See https://developer.youi.tv/latest/Content/AppiumTopics/H1RNAppium.htm for more details on developing Appium tests for your app.

    client/

This is a directory containing the default roku-client if developing for Roku Cloud. See https://developer.youi.tv/latest/Content/OverviewTopics/H1CloudSolutionRokuCpp.htm for more details on developing for Roku cloud.

    youi/

This is a directory containing C++ application files and build files. The built native application binaries will by default be located in `youi/build/<PLATFORM>`.

    index.youi.js

This is the default entry point for the React Native application. If you would like to change the default entry point, during a build you can pass `--file` to generate or build or edit the `youi:entryFile` field in package.json.

## Building - with remote or development bundling

First build this You.i React Native application. This example shows how to build for OSX, but you can also specify `linux` or `uwp`:

    youi-tv build -p osx

You then need to run the bundling server to host the JS source files required for the app. In a new terminal / shell (as this command will not return) run:

    yarn start

Run the application with

    youi-tv run -p osx

## Building - with local bundling

To deploy an application without relying on the bundling server (for example due to network issues, testing, CI servers, or loading speed) you can build with local bundling.

    youi-tv build -p osx --local

At this point you can run the application. The application assets will include a bundled copy of the JS application.

    youi-tv run -p osx

## More

To add more capabilities to your app, see the [quickstart guide](https://developer.youi.tv/latest/quickstart/your-first-app/).

## Advanced

- You can also generate, build and run with `youi-tv run -p osx`, which is roughly equivalent to:
  youi-tv generate -p osx
  youi-tv build -p osx
  youi-tv run -p osx

- You can change the default entry point of the application by modifying the `youi:entryFile` in package.json, and the default bundling mode by changing `youi:defaultBundleMode` to "local".

- Appium: Ensure that `babel-preset-react-native` is part of package.json for Appium to work with the app you build. If `babel-preset-react-native` is not part of package.json, run `yarn add babel-preset-react-native@4.0.0` on the terminal to add it.
