1) Package.json is the blueprint!
    Contains metadata (name, version, author, description, etc..)
    Simplifies collaboration
        + Manages dependencies
        + Defining start script 

2) npm init = making package.json for it.
/*
Challenge:
1. Create a package.json file by typing "npm init" in the terminal.
2. Answer the questions using the info in project_details.md.
*/
name: wild-horizons
version: default
description: a dataset of the planet’s most interesting places
entry point: server.js
test command: default
git repository: default
keywords: default
authour: your name
license: default

Remember: hit enter to accept the default option


3) the Request-response cycle
Client -> Server: the client making an HTTP request to the server
Server -> Client: the server does some processing and sends response back to the server
Ex:
    Client making HTTP request
    - Method: GET
    - Request Path: /api
    - Data: query string/ path params
    At server - handle request
    - filtering data
    - throwing an error 
    At server - response
    - resource (JSON)
    - Content-Type (application/json)
    - status code: 200, 404, etc

4) The request object
Gives us access to the incomming request
    - the url the client used
    - the headers
    - any data sent
    - the method (GET,POST,DELETE)
All of this allows us to comprehend what the client want to achieve,
what do they want to give us, and what do want from us in return.

And the request object makes various properties and methods available to us.
And one we're going to use a lot is the URL

5) HTTP is a text_based protocol
All data transferred between the client and the server must be in the form of strings. 

6) JSON.stringify(<data-to-convert>)

7) When sending data, setting the Content-Types (Mime types)
    - application/json
    - text/html
    - text/css 
    - application/javascript 

8) Add Path Parameters
/api/continent/africa = filter on continent
