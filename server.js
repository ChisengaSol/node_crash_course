const http = require('http');

//filesystem(fs) to help send html pages
const fs = require('fs');

//create server
const server = http.createServer((req,res) => {
    console.log('request made');

    //set header content type
    res.setHeader('Content-Type','text/html');

    // res.write('<p>Hello World</p>');

    // res.end();

    //send an html file
    fs.readFile('./views/index.html',(err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);

            res.end(data); //does the same as the write
        }
    });
});

server.listen(3000,'localhost',()=>{
    console.log('Listening for requests');
});