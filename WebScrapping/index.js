// let fs = require('fs');
// let data = fs.readFileSync("f1.txt");


// console.log(" "+data);

// // Updated Nodec

const http = require('http');
const port = 8000;


const server = http.createServer();



server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port:", port);
});