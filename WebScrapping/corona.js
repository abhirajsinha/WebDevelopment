const cheerio = require('cheerio');
const request = require("request");
request('https://www.worldometers.info/coronavirus/',cb);

console.log("Before");

function cb(error, response, html) {
    if (error )console.error('error:', error); // Print the error if one occurred
    else{
        handleHtml(html);
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }

  };

  console.log("After");

  function handleHtml(html){
     let setTool =  cheerio.load(html);
     let h1 = setTool("h1");
     console.log(h1.length);
  }