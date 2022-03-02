module.exports.config = {
    name: "hp",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team (mod sang)",
    description: "Đánh bạc bằng hình thức mặt lồn",
    commandCategory: "game",
    usages: "[số coin cần đặt]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
    const slotItems = ["😂", "☺️", "🤤", "🤑", "🥱", "🥰", "😋", "🥳", "😭", "🥺", "😱", "🤬"];
    const moneyUser = (await Currencies.getData(event.senderID)).money;
    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[ 🎲game ] Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
	if (moneyBet > moneyUser) return api.sendMessage("[ 🎲game ] Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	if (moneyBet < 10) return api.sendMessage("[ 🎲game ] Số tiền đặt không được dưới 20$!", event.threadID, event.messageID);
  if (moneyBet > 1000000) return api.sendMessage("[ 🎲game ] Số $ đặt không được quá 1.000.000$!", event.threadID, event.messageID);    
    var number = [], win = false;
    for (i = 0; i < 4; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2] || number[0] == number[1] && number[1] == number[3] || number[0] == number[1] && number[2] == number[3]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[0] == number[3] || number[1] == number[2] || number[1] == number[3] || number[2] == number[3]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`🎭 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | ${slotItems[number[3]]} « 🎭\nBạn đã thắng với ${moneyBet}$ `, event.threadID, event.messageID);
            await Currencies.increaseMoney(event.senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(`🎭 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} | ${slotItems[number[3]]} « 🎭\nBạn đã thua và mất ${moneyBet}$ `, event.threadID, event.messageID);
            await Currencies.decreaseMoney(event.senderID, moneyBet);
            break;
        }
    }
}