import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParams.js'
const PORT = 8000

const animal = {
    type: 'cattle',
    name: 'Yak Nicholson'
}

//String
console.log(typeof JSON.stringify(animal))


const server = http.createServer(async (req, res) => {


    const destinations = await getDataFromDB() 

        /*
    Challenge 10:
    1. Complete the two lines of code below.
    hint.md for help!
    */
    //Query pararams
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)
    console.log(queryObj)


    /*
Challenge 1:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/

    /*
    Challenge 2
      1. Store our data in a const ‘destinations’.
      2. When a GET request is received to the ‘/api' endpoint, send our JSON stringified data.
        Think: What changes will you need to make to get this to work?
    */

    /*
    Challenge 3:
    1. Access the ‘setHeader’ method on the response object and pass in two strings to set the      
       Content-Type to ‘application/json’ - watch out for casing! 
    */

    /*
    Challenge 4:
    1. Access the 'statusCode' property and set it to 200.
    */

    /*
    Challenge 7:
      1. Create a utility function to make this code DRYer.
      2. Delete unnecessary code.
    */

    /*
    Challenge 9:
    1. Create a util function to filter data.
    2. Wire it up and delete unneeded code.
    */

    /*
    Challenge 10:
    1. Complete the two lines of code below.
    hint.md for help!
    */
    // // Use the URL constructor and pass in the relative and base urls.
    // const urlObj = new URL(req.url, `http://${req.headers.host}`) 


    // // Use the fromEntries() method on the Object class .
    // // What do you need to pass in? 
    // const queryObj = Object.fromEntries(urlObj.searchParams)

    // console.log(queryObj)


    // Challenge 1
    if (req.url === '/api' && req.method === 'GET') {
        // res.end('This is from the server','utf8', () => console.log('response end'))
        // res.setHeader('Content-Type', 'application/json')
        // res.statusCode= 200
        // res.end(JSON.stringify(destinations))
        //let filteredDestinations = destinations
        let filteredData = getDataByQueryParams(destinations, queryObj)
        console.log(queryObj)
        //update filteredDestinations

        sendJSONResponse(res, 200, destinations)
    }
    else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
        const continent = req.url.split('/').pop()
        // const filteredData = destinations.filter((destination) => {
        //     return destination.continent.toLowerCase() === continent.toLowerCase()
        // })
        const filteredData = getDataByPathParams(destinations, 'continent', continent)
        // res.setHeader("Content-Type","application/json")
        // res.statusCode = 200
        // res.end(JSON.stringify(filteredData))
        sendJSONResponse(res, 200, filteredData)
        /*
      Challenge 6:
      1. Check if the url starts with “/api/continent”.
      (Is there a JS method that allows you to check what a string starts with?)

      2. If it does, serve only items from that continent.
      (How can you get to what comes after the final slash?)
      (What method can you use to filter data?)
      */
    }
    else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        /*
        Challenge 8:
        1. Add an 'api/country/<country>' route.
        */
        const country = req.url.split('/').pop()
        // const filteredData = destinations.filter((destination) => {
        //     return destination.country.toLowerCase() === country.toLowerCase()
        // })
        const filteredData = getDataByPathParams(destinations, 'country', country)
        // res.setHeader("Content-Type","application/json")
        // res.statusCode = 200
        // res.end(JSON.stringify(filteredData))
        sendJSONResponse(res, 200, filteredData)
    }
    else {
        /*
    Challenge 5:
    1. If the client tries to access a route that isn’t covered by the above, send this object: 
      {error: "not found", message: "The requested route does not exist"}
    Think: what do we need to send along with the data?
    */
        res.setHeader('Content-Type', 'application/json')
        // res.statusCode = 404
        // res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
        sendJSONResponse(res, 404, ({
            error: "not found",
            message: "The requested route does not exist"
        }))
    }

})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))