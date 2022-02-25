module.exports.config = {
	name: "vddl",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "Other",
	commandCategory: "video",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ event, api, global, Config, logger, Threads, Users, args, body, is }) => {

var ag = args.join(" ").split(" - ");
var text1 = ag[0],
    text2 = ag[1];
	if (!text2) return api.sendMessage('Vui lòng nhập Link!', event.threadID, event.messageID);
const axios = require('axios');
const request = require('request');
const fs = require('fs-extra');

    if (args[0] == "fb") {
      try{
      const res = await axios.get
(`https://api-ttk.herokuapp.com/social/videodl?link=${text2}`);
var caclo = res.data.medias[0].url;

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/fbvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbvd.mp4"),event.messageID);
	 return request(encodeURI(`${caclo}`)).pipe(fs.createWriteStream(__dirname+'/cache/fbvd.mp4')).on('close',() => callback());     
}
     

catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
    } 
  
   else if (args[0] == "tiktok") {
     try {
      const res = await axios.get
(`https://api-ttk.herokuapp.com/social/videodl?link=${text2}`);
var caclo = res.data.medias[1].url;

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/tt.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tt.mp4"),event.messageID);
	 return request(encodeURI(`${caclo}`)).pipe(fs.createWriteStream(__dirname+'/cache/tt.mp4')).on('close',() => callback());     
}
catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
   }
else if (args[0] == "ins") {
  try {
      const res = await axios.get
(`https://api-ttk.herokuapp.com/social/videodl?link=${text2}`);
var caclo = res.data.medias[0].url;

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/ins.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ins.mp4"),event.messageID);
	 return request(encodeURI(`${caclo}`)).pipe(fs.createWriteStream(__dirname+'/cache/ins.mp4')).on('close',() => callback());     
}

catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
   
  }
  else if (args[0] == "scd") {
     try {
      const res = await axios.get
(`https://tyz-api.herokuapp.com/downloader/scdl?link=${text2}`);


	 var callback = () => api.sendMessage({body:`${res.data.title}`,attachment: fs.createReadStream(__dirname + "/cache/scd1.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/scd1.mp3"),event.messageID);
	 return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname+'/cache/scd1.mp3')).on('close',() => callback());     
}
catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
   }
   else if (args[0] == "pin") {
     try {
      const res = await axios.get
(`https://tyz-api.herokuapp.com/downloader/pindl?link=${text2}`);


	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/scd1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/scd1.mp4"),event.messageID);
	 return request(encodeURI(`${res.data.result}`)).pipe(fs.createWriteStream(__dirname+'/cache/scd1.mp4')).on('close',() => callback());     
}
catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
   }
   else if (args[0] == "tw") {
     try {
      const res = await axios.get
(`https://tyz-api.herokuapp.com/downloader/twitter?link=${text2}`);
var caclo = res.data.HD;

	 var callback = () => api.sendMessage({body:`${res.data.desc}`,attachment: fs.createReadStream(__dirname + "/cache/scd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/scd.mp4"),event.messageID);
	 return request(encodeURI(`${caclo}`)).pipe(fs.createWriteStream(__dirname+'/cache/scd.mp4')).on('close',() => callback());     
}
catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
   }
}