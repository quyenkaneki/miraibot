const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bopmong",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Kaneki",
  description: "Ảnh bopvu",
  commandCategory: "nsfw",
  usages: "bopvu",
  cooldowns: 0,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.postimg.cc/mkx4rC8N/detail-2.gif"

   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`Bị Anh Bóp Mông Đã Không Em ` + `${tag}`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/bopmong.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/bopmong.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/bopmong.jpg")).on("close",() => callback());
   }