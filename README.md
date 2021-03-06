# Cryptounite App

My attempt at combining a DEX and a DAO to provide a transparent donation process. 

Currently build using MERN stack + Solidity.

## Project Aim

The purpose of this project is to create a MERN stack application that will incorporate smart contracts to distribute money.

The DEX will collect a small percentage of trader fees into a pool. This pool's allocation will be decided by a DAO where users can vote for where the money should be allocated to (countries in need), and receive an incentive token if that proposal wins.

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


