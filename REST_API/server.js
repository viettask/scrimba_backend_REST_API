import http from 'node:http'
const PORT = 8000

const server = http.createServer((req,res)=> {
    /*
Challenge 1:
Check the ‘url’ property on the req object. 
Only serve our string if it’s ‘/api’.
*/
    if(req.url === '/api'&& req.method ==='GET')
    res.end('This is from the server','utf8', () => console.log('response end'))
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))