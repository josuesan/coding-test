<h1 align="center">Interview Coding Test</h1>

## Information
This project was built with Node, designed with object-oriented programming and using the factory method for creating different products. 

## Getting Started
To be able to observe the reporter of the products in 30 days you must execute the following command
```
npm run after-30-days
```
This generates a console output with the report and additionally generates a file after-30-days.txt in the root of the project, this file contains the same output. 

To execute the tests and observe the coverage test, the following command must be executed 
```
npm run test
```

Additionally, an api module was created, which exposes an endpoint to consult for a specific product and its price report based on 30 days, for this you must execute the command 
```
npm run server
```

## Docker Option

This project contains a dockerfile and a docker-compose.
It is recommended to make a clone of the project, run the command 
```
docker-compose  up -d --build
```
This will run all the tests (You can see the docker log), create the file after-30-days.txt in the root of the project and start a service that exposes an api and additionally a client in Reactjs at the following URL **http://localhost:3000/** on the website you can consult the product report. 
