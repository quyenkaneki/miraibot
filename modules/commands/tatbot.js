module.exports.config = {
	name: "tatbot",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "Hỏrỉzỏn", // =))
	description: "hẹn giờ bật bót",
	commandCategory: "admin",
	usages: "[time ( giây )]",
	cooldowns: 5
};
module.exports.run = async function({ api,event,args }) {
 const permission = ["100078181149523"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
    if (!args[0]) return api.sendMessage("Vui Lòng Nhập Thời Gian Bật Bot Trở Lại !",event.threadID,event.messageID);
    else {
      if (isNaN(args[0])) return api.sendMessage("Phải Là 1 Con Số !",event.threadID)
      var ec = 2
      var xx =  ec + args[0];
      api.sendMessage("Sẽ Bật Bot Trở Lại Sau : " + args[0] + " Giây Nữa !" ,event.threadID,async () => process.exit(xx));
    }
};