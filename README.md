# Flextock-task

Link of deployment on heroku --> https://flextock-task.herokuapp.com/people

## guide on how to deploy your application.

1- In package.json move ("typescript": "~3.5.3","@angular/cli": "~8.3.23","@angular/compiler-cli": "~8.2.14") from "devDependencies" to "dependencies"

2- In package.json add "postinstall": "ng build --prod" in scripts

3- Create server.js file to be server on heroku " file in project folder root "

4-In package.json change "start" from "ng serve" to "node server.js" to run server file

5- Creat git repository
git init
git add .
git commit -am " message "
git push heroku master

## Development server

Run `ng serve` for a dev server.

## Running unit tests

Run `ng test` to execute the unit tests
