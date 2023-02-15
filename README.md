# Run the project
Go to /json-mock-api
 - npm install
 - npx json-server --watch db.json

Go to /application-tracking-system
 - npm install
 - npm start

 If you have a mac computer you might need to go to package.json in the root, 
 and change "start": "set PORT=3006 && react-scripts start" 
 to "start": "set PORT=3006 react-scripts start",