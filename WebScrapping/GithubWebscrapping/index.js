const cheerio = require('cheerio');
const request = require("request");

let url = "https://github.com/topics";

 
request(url,cb);

function cb(error,response,html){
    if(error){
        console.log("Error",error);
        return;
    }

    console.log(html);
}