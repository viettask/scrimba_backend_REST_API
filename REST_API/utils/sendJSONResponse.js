export const sendJSONResponse = (res, statusCode, payload) => {
    res.setHeader('Content-Type', 'application/json')
    //Allow access from any domain using any port, or any protocol as long as they're using GET method 
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.statusCode = statusCode
    res.end(JSON.stringify(payload))
}