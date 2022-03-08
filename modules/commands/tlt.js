module.exports.config = {
  name: "tlt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "shion-keymodulchinhle",
  description: "taglientuc",
  commandCategory: "image",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }, 
envConfig: {
      API_KEY: "chdz"
}  
};

module.exports.run = async function({ api, args, Users, event}) {
   const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const { mentions, threadID, messageID } = event;
const { APIKEY } = global.configModule.tlt;
const res = await axios.get (`https://raw.githubusercontent.com/Chinhle242/data/main/apitaglientuc.json`);
let key = res.data.data;
if (`chdz` != `${key}`) { console.log('\x1b[33m[ WARN ]\x1b[37m » có key chưa nhóc con đjt mẹ mày luôn đấy con chó:))');        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' leak modules liên hệ fb https://m.facebook.com/chinhle3601 để nhận key "' + this.config.name + '"', threadID, messageID);      }   
 
  function handleReply(body) {
    api.sendMessage(body, threadID, messageID);
  }

  let solantag = args[args.length - 2];
  let time = args[args.length - 1]; // khoảng cách mỗi lần tag

  // Check syntax
  if (Object.keys(mentions) == 0 && args[0] != "stop") return handleReply("Vui lòng tag người bạn muốn gọi hồn");
  if ((!solantag || !time) && args[0] != "stop") handleReply("Sai cú pháp !!!\n\nHD: taglientuc @tag Hi 1 5");
  if (isNaN(solantag) && args[0] != "stop") return handleReply("Số lần tag phải là một con số\n\nHD: taglientuc @tag Hi 10 2");
  if (isNaN(time) && args[0] != "stop") return handleReply("Thời gian giữa mỗi lần tag phải là một con số");
  time = time * 1000;
  const target = Object.keys(mentions)[0];
  var name = (await Users.getData(target)).name;
  var mentionsTag = [];
  mentionsTag.push({
    id: target,
    tag: name
  })
  let i = 0;
  if (["stop", "clear"].includes(args[0])) {
    clearTimeout(time);
    time = 0;
    i = solantag;
    return handleReply("done");
  }
  handleReply(`Chuẩn bị gọi hồn...`);
  var noidungtag = args.slice(2, args.length - 2).join(" ");
  for (i = 0; i < solantag; i++) {
    await delay(time);
    api.sendMessage({
      body: '' + name + ' ' + noidungtag,
      mentions: mentionsTag
    }, threadID);
  };
}
