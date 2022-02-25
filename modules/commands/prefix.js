module.exports.config = {
	name: "prefix",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ManhG",
	description: "",
	commandCategory: "noprefix",
	usages: "",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["prefix"] !== "undefined" && thread["prefix"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}
	//trả lời
	var msg = {
		body: `Chào ${name}, dấu lệnh của bot là: ${global.config.PREFIX}`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://apiquyenkaneki.tk/api/gai/gai.php')).data.data,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["lệnh", "dấu lệnh", "prefix"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};