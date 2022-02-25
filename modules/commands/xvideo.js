module.exports.config = {
    name: "xvideo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Shiron",
    description: "Download video nào đó trên xnxx.com=)))UwU",
    commandCategory: "video",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
		"axios": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
try {
let text = args.join(" ")
  if (!text) return api.sendMessage('Vui lòng nhập link sếch cần tải?', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
const res = await axios.get
(`http://api.leanhtruong.net/api/xvideos?url=${link}&apikey=thay api key được reg trên api leanhtruong.net vô đây`);
var url = res.data.low;
var tt = res.data.title;
var lat = res.data.author;
	 var callback = () => api.sendMessage({body:`=>>Tên Phim Sếch: ${tt}\n=>>Author: ${lat}`,attachment: fs.createReadStream(__dirname + "/cache/xvideo.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/xvideo.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/xvideo.mp4')).on('close',() => callback());     
} catch {
            return api.sendMessage('API BỊ LỎ HOẶC API KEY ĐÃ HẾT HẠN=)))', event.threadID, event.messageID);
        }
}
