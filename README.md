<p align="center">
  <img src="./src/img/oxean_header.png" width="400px">
</p>

<h1 align="center">Oxean Films</h1>

Application that simulates a streaming service for films. The objective in this project was to apply the main concepts of Front-end development. Was used the TMDB api. Designed in responsive mode.

## Demos


Desktop demo:

<p align="center">
  <img src="./src/img/desktop.gif"><br><br>
</p>

Mobile demo: 

<p align="center">
  <img src="./src/img/mobile.gif">
</p>

<br>

## Used Technologies

* VITE - REACT.JS
* KENDOREACT 
* CONTEXT API
* TMDB API
* CSS
* JEST (for tests)

## Features

* Can get details about films in a specific page
* Can view film details through a filterable grid (by columns or general filter)
* Designed in responsive mode

## To Run Locally

* Clone the project:

`git clone https://github.com/andrearnoni/Oxean-Films.git`

### 1 - Get Bearer Token (for TMDB API use. It's free)

* Go to the site https://www.themoviedb.org/signup

* Register

* Get the Token

### 2 - In the main project folder

* Install dependencies:

`npm install`

* Create a .env file based on the project's already available example (.env.example). For this example of environment variable I used a general example (.env) but if you prefer, you can choose more than one environment (.env.PROD for an app that is running in production for example). In this project, it is used in the helpers/GeneralHelpers.jsx file

* Place the token you got from the TMDB website into your newly created .env file and save

* Start the server:

`npm run dev`

### 3 - Running the tests (tests directory)

To run all jest tests:

`npm test`

### OBS

1- For this project, as it is a challenge, for educational purposes the original token is included in the .env folder, however after a certain period it will be deleted. Remembering that it is only for educational and evaluation purposes as this is not a good practice

2 - For Kendoreact, as a paid key for the service is required, if not placed in the project, the project will work the same way, but it will launch some warnings in the browser console and show the following message on the screen: "No valid license found for KendoReact. Learn how to activate your license."

## Author

This project was coded and designed by [@andrearnoni](https://github.com/andrearnoni).

### Go to my [Portfolio!](https://andrearnoni.vercel.app/) 
### Connect with me at [LinkedIn!](https://www.linkedin.com/in/andrearnoni/) 
