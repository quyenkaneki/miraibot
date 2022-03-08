module.exports.config = {
	name: "npm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "npm",
	commandCategory: "Other",
	usages: "npm",
	cooldowns: 5,
	dependencies: {"axios" : ""}

	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let decode = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/npm?q=${decode}`);
var name = res.data.name;
var version = res.data.version;
var description = res.data.description;
var keywords = res.data.keywords;
var author = res.data.author;
var last_published = res.data.last_published;
var maintainers = res.data.maintainers;
var repository = res.data.repository;
var email = res.data.author_email;
var downloads_this_year = res.data.downloads_this_year;
return api.sendMessage(`>Tên :${name}\n>Bản :${version}\n>Mô tả :${description}\n>Từ Khóa :${keywords}\n>Chủ : ${author}\n>link Ct :${email}\nUpdate lần cuối : >${last_published}\n>Người bảo trì : ${maintainers}\n>repository : ${repository}\n>$downloads_this_year : ${downloads_this_year}`, event.threadID, event.messageID)
}
