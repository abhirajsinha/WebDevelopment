const cheerio = require('cheerio');
const request = require("request");

let url = "https://github.com/topics";

 
request(url,cb);

function cb(error,response,html){
    if(error){
        console.log("Error",error);
        return;
    }

    getTopicsLikns(html);
    // console.log(html);
}

function getTopicsLikns(html){
    let $ = cheerio.load(html);

    let topicLinks = $(".no-underline.d-flex.flex-column.flex-justify-center");

    //print topics links

    for(let i=0;i<topicLinks.length;i++){
        let links = $(topicLinks[i]).attr("href");
        let fullLink = `https://github.com/${links}`;
        console.log(fullLink);
    }
}