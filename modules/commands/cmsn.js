module.exports.config = {
	name: "cmsn",
	version: "1.0.0",
	credits: "Dũngkon",
	description: "",
	usages: "",
    commandCategory: "game-sp",
	cooldowns: 0,
	dependencies: {
        "fs-extra" : ""
    }
};
module.exports.onLoad = function () {
    const fs = global.nodemodule["fs-extra"];

	if (!fs.existsSync(__dirname + "/cache/bill.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/bill.json", JSON.stringify(requestList));
	}
}
module.exports.handleReply = async function({ api, event, handleReply, Currencies }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if (handleReply.author != event.senderID) return;
    var data = await Currencies.getData(handleReply.author);
    var exp =  data.exp;
    var money = data.money
    var d = new Date();
    var date = d.getDate()+'/'+(d.getMonth() + 1 )+'/'+d.getFullYear();
	var time = d.getHours() + ":" + d.getMinutes();
    switch (handleReply.type) {
        case "bạn có 5 phần quà": {
            switch (event.body) {
                case "1": {
                    return api.sendMessage(
                        "hộp 1"
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);
                } 
                case "2": {
                    return api.sendMessage(
                        "hộp 2"
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "exp"
                      });
                  }, event.messageID);
                } 
                case "3": {
                    return api.sendMessage(
                        "hộp 3"
                  , event.threadID, (error, info) => {
                      global.client.handleReply.push({
                          name: this.config.name,
                          messageID: info.messageID,
                          author: event.senderID,
                          type: "money"
                      });
                  }, event.messageID);   
                }
                default:
                    break;
            }
            return;
          }
          case "exp": {
            var content = event.body;
            if(content > exp) api.sendMessage("Exp của bạn không đủ ? vui lòng cào phím nhiều hơn",event.threadID,event.messageID)
            else 
            {
            await Currencies.increaseMoney(handleReply.author, parseInt(content / 5));
            var exp = ((await Currencies.getData(handleReply.author)).exp) - parseInt(content);
            await Currencies.setData(handleReply.author, { exp })
            var msg = `💸Giao dịch thành công !\nThời gian: ${time} - ${date}\nChi tiết: đổi ${content} exp để lấy ${content / 5} đô.`
            api.sendMessage(msg,handleReply.author);
            const suggest = msg;
            getData.push(suggest);
            api.sendMessage("Giao dịch của bạn đã được lưu trên hệ thống !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
          
            }
          break;
       }
       case "money": {
        var content = event.body;
        if(content > money) api.sendMessage("Tiền của bạn không đủ ? vui lòng theo thầy Huấn bươm trải !",event.threadID,event.messageID)
        else 
        {
            await Currencies.increaseMoney(event.senderID, parseInt("-"+content))
        var exp = ((await Currencies.getData(handleReply.author)).exp) + parseInt(content / 10);
        await Currencies.setData(handleReply.author, { exp })
        var msg = `💸Giao dịch thành công !\nThời gian: ${time} - ${date}\nChi tiết: đổi ${content} đô để lấy ${content / 10} exp.`
        api.sendMessage(msg,handleReply.author);
        const suggest = msg;
        getData.push(suggest);
        api.sendMessage("Giao dịch của bạn đã được lưu trên hệ thống !",event.threadID, () => fs.writeFileSync(dirFile, JSON.stringify(getData)),event.messageID);
      
        }
      break;
   }
      }
    }
module.exports.run = async function({ api, event, args }) {
    const fs = global.nodemodule["fs-extra"];
	const dirFile = __dirname + "/cache/bill.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

    if(!args[0])return api.sendMessage(
                "◆━━◆ CMSN ◆━━◆" +
                "\n» Bạn Có 5 Phần Quà «" +
                "\n\n1. Hộp 1." +
                "\n2. Hộp 2." +
                "\n3. Hộp 3." +
                "\n4. Hộp 4." +
                "\n5. Hộp 5." +
                "\n6. Update sau ⚒." +
                "\n\n» Hãy reply tin nhắn và chọn theo số «"
            , event.threadID, (error, info) => {
                client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "banking"
                });
            }, event.messageID);
     
    if (args[0] == "check") {
        var workList = "";
			getData.map(item => workList += `\n ${item}`);
			return api.sendMessage(`${workList}`, event.threadID, event.messageID);
		}
        
}
