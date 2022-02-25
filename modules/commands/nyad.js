module.exports.config = {
	name:"nyad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HTHB-api mod by Kaneki",
	description: "Random ảnh ny Quyền theo api",
	commandCategory: "nyad",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	if (event.senderID != 100077008073768) return api.sendMessage(`Quyền lồn biên giới!`, event.threadID, event.messageID)
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apixin.quyenmy2k7.repl.co/nyquyen').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `Ảnh người iu admin xinh xĩu😘`,
						attachment: fs.createReadStream(__dirname + `/cache/nyad.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nyad.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nyad.${ext}`)).on("close", callback);
			})
}