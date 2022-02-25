module.exports.config = {
	name: "language",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Đổi ngôn ngữ Bot",
	commandCategory: "admin",
	usages: "[vi] [en]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["100077180438067"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
    const { threadID, messageID } = event;

    switch (args[0]) {
        case "vietnames":
        case "vi":
            {
                return api.sendMessage(`Ngôn ngữ đã được chuyển sang tiếng Việt`, threadID, () => global.config.language = "vi"); 
            }
            break;
        
        case "english":
        case "en":
            {
                return api.sendMessage(`Language has been converted to English`, threadID, () => global.config.language = "en"); 
            }
            break;
    
        default:
            {
                return api.sendMessage("Syntax error, use : language [vi / en]", threadID, messageID);
            }   
            break; 
            
    }	
}