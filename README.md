# Cryptounite App

Learning Full Stack dev + blockchain dev, through my own original HTML/CSS/JS project. Now, using MERN stack + Ethereum Virtual Machine.

Pure CSS is used, as I want to improve my skills. However, frameworks such as MaterialUI/Bootstrap will be applied later.

## Project Aim

The purpose of this project is to create a MERN stack application that will incorporate smart contracts to distribute money.

This will incorporate the Ethereum Virtual Machine to deploy the application, once the current objectives have been met.



### Current objectives

* Incorporate JSON Web Tokens for authentication
* Create a basic profile page
* Fix CSS media queries at very small & big screen sizes

## Screenshots and design

### Homepage

![appDemo1](https://user-images.githubusercontent.com/64858288/125200053-fe881100-e260-11eb-8b85-783ab14b0761.png)
![appDemo2](https://user-images.githubusercontent.com/64858288/125202442-84a95500-e26b-11eb-9351-3602cf4feafb.png)

The "the How" section will embed a short animated infographic video to explain the DApp.


### Sign up

![appDemoSignUp](https://user-images.githubusercontent.com/64858288/125201843-c5ec3580-e268-11eb-8c6f-cb058d9760ca.png)

A MongoDB database is used to store customer accounts using a REST API. 

Authentication code for front end and back end has been implemented. See backend/customer.crypto.js and src/password.jsx. 

For example, the below image shows what is required for a password.

![appPassword](https://user-images.githubusercontent.com/64858288/125204613-01d9c780-e276-11eb-837b-8e59e577fe08.png)

![appSuccess](https://user-images.githubusercontent.com/64858288/125202239-950d0000-e26a-11eb-8c6a-774b7f52a247.png)

Success! Once an created had been created, the user will be redirected to the home page, but logged in.


### Donation page (Figma)

Current draft of the donation page via Figma. This page will explain the series of transaction processes that will occur on the blockchain (in laymans terms).

Javascript events will be used to trigger the next frame.

![appDonateFigma](https://user-images.githubusercontent.com/64858288/125203990-eae5a600-e272-11eb-87bd-bc221dd535b7.png)


## Skills and Stack 

Having used primary JSX (HTML/JS) with pure CSS, I have learnt a lot about the mindset shift required for working with a react.js app.

The swift component rendering, as opposed to the entire page, provides a seamless user experience. 

The total list of tech stack:

* HTML
* CSS
* JS/JSX
* Node/Express.js
* Mongoose/MongoDB
* Figma - UX/UI design 
* EVM - Truffle, web3, Ganache

### Note (12/07/21):

Accidentally deleted some files with git --reset hard (rookie mistake I know), so the most recent files are missing but I will recreate them soon


=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
