module.exports.config = {
	name: "setting",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Hỏrỉzỏn, mirai, HTHB",
	description: "rs,off...",
	commandCategory: "System",
  usages: "[t/rs/of/o]",
	cooldowns: 0
};
module.exports.run = async ({event, api, args, Users, Threads }) => {
  //const permission = ["100078181149523"];
    //if (!permission.includes(event.senderID)) return api.sendMessage("hmm...! Bạn không phải chủ tôi 😠", event.threadID, event.messageID);
  const p = config.PREFIX
  let n = await Users.getNameUser(event.senderID)
  if (args.length == 0) return api.sendMessage(`Bạn có thể dùng:\n\n${p}nam time => sẽ bật BOT lại theo thời gian bạn nhập\n${p}nam reset => khởi động lại BOT\n${p}nam off => tắt BOT\n${p}nam on => bật BOT`, event.threadID, event.messageID);
  switch (args[0]) {
    case "time":
    case "t": {
    if (!args[1]) return api.sendMessage("Bạn cần nhập thời gian",event.threadID,event.messageID);
      if (isNaN(args[1])) return api.sendMessage("Thời gian bạn nhập phải là con số",event.threadID)
      var ec = 2
      var xx =  ec + args[1];
      api.sendMessage("Bot sẽ quay lại sau" + args[1] + "Giây nữa" ,event.threadID,async () => process.exit(xx));
  }
    case "reset":
    case "rs": {
     api.sendMessage(`${n} đã yêu cầu khởi động lại BOT, quá trình này mất bao lâu tùy thuộc vào số lượng mdl`,event.threadID, () =>process.exit(1))}
    case "off":
    case "of": {
    api.sendMessage(`Bot ngủ đây! bye cậu ${n}`,event.threadID, () =>process.exit(0))
    }
  case "on": 
  case "o": {
    api.sendMessage(`Hí! chào cậu ${n}`,event.threadID, () =>process.enter(1))
  }
 }
}
