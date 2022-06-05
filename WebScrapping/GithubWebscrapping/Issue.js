const cheerio = require('cheerio');
// const { html } = require('cheerio/lib/api/manipulation');
const request = require("request");

function getIssueHtml(url,topicName){
    request(url,cb);

    function cb(error,response,html){
        if(error){
            console.log("Error",error);
            return;
        }
        else if(response.statusCode==404){
            console.log("Page Not Found!!!");

        }

        // console.log(html);
        getIssues(html);
    }

    function getIssues(html){
        // console.log(topicName,`-------------------------`);
        let $ = cheerio.load(html);
        let issues = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        console.log(issues.length);
        let arr=[];
        for(let i=0;i<issues.length;i++){
            let issueLink = $(issues[i]).attr("href");
            // console.log(issueLink);
            arr.push(issueLink);
        }

        console.log(topicName,"    ",arr);
    }
}

module.exports = getIssueHtml;