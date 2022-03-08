module.exports.config = {
  name: "xktc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "tdunguwu",
  description: "xktc",
  commandCategory: "admin",
  usages: "",
  cooldowns: 2
};
module.exports.run = async({api, event, args}) => {
 const { threadID, messageID, senderID } = event;
	const axios = require('axios');
  const fs = require('fs');
  const request = require('request');
  var key_1 = 'AIzaSyCHfJCpWEYUCydDMbb9PqK42XpPQd9L-F8';
  var key_2 = '017207449713114446929:kyxuw7rvlw4';
  const text1 = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("-")[1];
	if (args[0] == "search" || args[0] == "-s") {
const url = `https://www.googleapis.com/customsearch/v1?key=${key_1}&cx=${key_2}&q=${encodeURIComponent(text1)}`;
  request(url, (err, res, body) => {
  if (!err && res.statusCode == 200) {
 const results = JSON.parse(body).items;
  if (results.length > 0) {
 api.sendMessage({
  "url": results[0].formattedUrl 
}, threadID, messageID);
} else {
 api.sendMessage("không tìm thấy kqua", threadID, messageID);  
}} else {
console.log(err);
}
});
  }
 if (args[0] == "new" || args[0] == "-n") {
request("http://xkcd.com/info.0.json", (err, res, body) => {
  if (!err && res.statusCode == 200) {
 const num = parseInt(JSON.parse(body).num); 
api.sendMessage({
                            "url": `http://xkcd.com/${num}`
                        }, threadId);
                    } else {
                       
                        api.sendMessage({
                            "url": "http://xkcd.com/"
                        }, threadID, messageID);
                    }
                });
            } 
} 
