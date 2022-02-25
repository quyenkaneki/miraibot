module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: "tải lại dữ liệu file config",
	commandCategory: "admin",
	usages: "[]",
	cooldowns: 300
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
const permission = ["100077180438067"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("reloading config", event.threadID, event.messageID);    
}