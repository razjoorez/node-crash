import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req,res)=> {
   // res.setHeader('Content-type', 'text/html');
     //res.statusCode = 404;
    //res.write('hello world');
    res.writeHead(500,{'Content-Type':'application/json'});
    res.end(JSON.stringify({message: 'Internal Server Error'}));
    //res.end('<h2>content is html or not ?</h2>');
})


server.listen(PORT, ()=> console.log(`server running on port${PORT}` ));


// const server = http.createServer((res,req) => {
//     res.write('hello from server 2');
//     res.end();
// })


// server.listen(8090, ()=> {
//     console.log('listening ...')
// })