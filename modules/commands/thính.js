module.exports.config = {
	name: "thính",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ca Dao Việt Nam",
	commandCategory: "other",
	usages: "cadao",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`https://apikanekiflop.tk/hearing`);
const anh = await axios.get(`https://apikanekiflop.tk/gai`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
			 api.sendMessage({
				body: `${cadao}`,
				attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
			}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
			};
			request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}
