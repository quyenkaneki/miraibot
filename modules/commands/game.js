module.exports.config = {
    name: "game",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "Just Game ?",
    commandCategory: "Giải trí",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
  	if (args[0] == "txcl") {
      if (!args[1]) return api.sendMessage("Bạn phải cược tài hoặc xỉu...", threadID, messageID);
    const choose = args[1]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("Chỉ đặt cược tài hoặc xỉu!", threadID, messageID)
    const money = args[2]
    if (money < 50 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const typ = ['tài', 'xỉu'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
  
    if (choose == random) {
	await Currencies.increaseMoney(senderID, parseInt(money * 2));
	api.sendMessage({
		
			body: `Bạn đã thắng \nĐược: ${money*2}$\nKết quả: ${random} `},threadID, messageID);
	}
else {
        await Currencies.decreaseMoney(senderID, parseInt(money));
	api.sendMessage({
		body: `Bạn đã thua\nMất: ${money}$\nKết quả: ${random} `},threadID, messageID);
	}
}
 catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}
if (args[0] == "baucua" || args[0] == "bc") {  
  const slotItems = ["🍐", "🦀", "🐟", "🦌", "🐓", "🦞"];
        const moneyUser = (await Currencies.getData(event.senderID)).money;
            var moneyBet = parseInt(args[2]);
                if (!args[1] || !isNaN(args[1])) return api.sendMessage("Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
                if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("Số tiền đặt cược không được để trống hoặc là số tiền âm", event.threadID, event.messageID);
	        if (moneyBet > moneyUser) return api.sendMessage("Số tiền bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	    if (moneyBet < 1000) return api.sendMessage("Số tiền đặt không được dưới 1000 đô!", event.threadID, event.messageID);
    var number = [], win = false;
for (let i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
    var itemm;
        switch (args[1]) {
            case "bầu":
                case "Bầu": itemm = "🍐";
                    break;
            case "cua": 
                case "Cua": itemm = "🦀";
                    break;
            case "cá":
                case "Cá": itemm = "🐟";
                    break;
            case "nai":
                case "Nai": itemm = "🦌";
                    break;
            case "gà": 
                case "Gà": itemm = "🐓";
                    break;
            case "tôm":
                case "Tôm": itemm = "🦞";
                    break;
                        default: return api.sendMessage(" Hãy Bấm : /baucua [bầu/cua/cá/nai/gà/tôm] [số tiền]",event.threadID, event.messageID);
        }
    api.sendMessage("chờ tớ quay cái nha UwU",event.threadID, event.messageID);
await new Promise(resolve => setTimeout(resolve, 3 * 1000));
var array = [number[0],number[1],number[2]];
    if (array.includes(itemm)) {
        var i = 0;
            if (array[0] == itemm) i+=1;
                if (array[1] == itemm) i+=1;
            if (array[2] == itemm) i+=1;
        if (i == 1) {
            var mon = parseInt(args[1]) + 300; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 1 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 2) {
            var mon = parseInt(args[1]) * 2; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 2 ${itemm}!`,event.threadID, event.messageID);
        }
        else if (i == 3) {
            var mon = parseInt(args[1]) * 3; 
                await Currencies.increaseMoney(event.senderID, mon);
                    return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Được ${mon} Đô,Vì Có 3 ${itemm}!`,event.threadID, event.messageID);
        }
        else return api.sendMessage("Lỗi ! Code : XX1N",event.threadID,event.messageID);
    } else  {
        await Currencies.decreaseMoney(event.senderID, parseInt(args[1]));
           return api.sendMessage(`Kết Quả : ${array.join("|")}\n[✤] => Trừ ${args[1]} Đô,Vì Có 0 ${itemm}!`,event.threadID, event.messageID);
    }
     }        
      if (args[0] == "slot" ) {   
        const slotItems = ["🍇", "🍉", "🍊", "🍏", "7⃣", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    const moneyUser = (await Currencies.getData(event.senderID)).money;
    var moneyBet = parseInt(args[1]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[ SLOT ] Số coin đặt cược không được để trống hoặc là số coin âm", event.threadID, event.messageID);
	if (moneyBet > moneyUser) return api.sendMessage("[ SLOT ] Số coin bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	if (moneyBet < 50) return api.sendMessage("[ SLOT ] Số coin đặt không được dưới 50 coin!", event.threadID, event.messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`🎰 ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} 🎰\nBạn đã thắng với ${moneyBet} coin`, event.threadID, event.messageID);
            await Currencies.increaseMoney(event.senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(`🎰 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} « 🎰\nBạn đã thua và mất ${moneyBet} coin`, event.threadID, event.messageID);
            await Currencies.decreaseMoney(event.senderID, moneyBet);
            break;
        }
    }
}
if (args[0] == "rps" || args[0] == "kbb") { 
  function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          
    if(!args[1]) {
        outMsg("Vui lòng nhập 'kéo' hoặc 'búa' hoặc 'bao'")
    }
    else{
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[1];
                   
          if (userturn == "kéo"||userturn == "búa"||userturn == "bao") {
            if (userturn == turnbot) {
              return outMsg(`Hòa\nUser : ${userturn}\nBot : ${botturn}\nHòa, số dư không thay đổi`)
            } else if (userturn == "kéo") {
              if (botturn == "👊") {
                
                return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
                
              } else if (botturn == "✋") {
                
                return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
                
            }
          } else if (userturn == "búa") {
            if (botturn == "✋") {
              
              return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
              
            } else if (botturn == "✌️") {
              
              return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
              
          }
        } else if (userturn == "bao") {
          if (botturn == "✌️") {
            
            return outMsg(`BẠN ĐÃ THUA\n\nUser : ${userturn}\nBot : ${botturn}\n`)
            
          } else if (botturn == "👊") {
           
            return outMsg(`BẠN ĐÃ THẮNG\n\nUser : ${userturn}\nBot : ${botturn}\n`)
            
   }
  }
}
  } 
}
     if (args.join() == "") { 
	  return api.sendMessage(`thíu XD\n ========= Game =========\n bầu cua\nslot\nrps\ntxcl`, event.threadID, event.messageID)} 
}
