module.exports.config = {
    name: "sdtfb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "chinhle convert tu goad",
    description: "",
    commandCategory: "Other",
    usages: "[info]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  	
 
const link = args.join(" ");
if (!link) return api.sendMessage('thiếu link fb ', event.threadID, event.messageID)
try {
const res = await axios.get(`https://www.taoanhdep.tk/sdtfb?link=${link}`);
const sdtt = res.data.data.sdt;

return api.sendMessage(`» ${sdtt}`, event.threadID, event.messageID)
} catch {
            return api.sendMessage('không tìm thấy số điện thoại', event.threadID, event.messageID);
        }
}
