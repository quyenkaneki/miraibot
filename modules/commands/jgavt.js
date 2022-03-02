module.exports.config = {
    name: "jgavt",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "tạo ảnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": "",
        "axios": ""
    }
};
module.exports.handleReply = async function ({ event, api, handleReply }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const timeStart = Date.now();
    if (handleReply.author != event.senderID) return;
    const { threadID, messageID, senderID, body } = event;
    var id = handleReply.id;
    const name = this.config.name;
    switch (handleReply.type) {
      case "kaneki": {
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`[!] Bạn đã chọn chữ nền là ${event.body}\n\n[!] Reply tin nhắn này nhập vào chữ ký của bạn [!]`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "color",
                    name,
                    author: senderID,
                    id: id,
                    names,
                    nen: event.body,
                    messageID: info.messageID
                });
        },messageID)
      }
      case "color": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var names = handleReply.names;
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`[!] Bạn đã chọn chữ ký : ${event.body}\n\n[!] Nhập màu của bạn (lưu ý: nhập tên tiếng anh của màu - Nếu không muốn nhập màu thì nhập "no") [!]`,threadID, function (err, info) {
          return global.client.handleReply.push({
                    type: "create",
                    name,
                    author: senderID,
                    id: id,
                    nen: nen,
                    names,
                    ky: event.body,
                    messageID: info.messageID
                });
        },messageID) 
      }
      case "create": {
        var nen = handleReply.nen;
        var id = handleReply.id;
        var ky = handleReply.ky;
        var color = event.body;
        var names = handleReply.names;
        var color2 = ``;
        api.unsendMessage(handleReply.messageID);
        if (color == "no") var color = `#`;
        var callback = () => api.sendMessage({body:`=> Tên nhân vật: ${names}\n=> Mã số nhân vật: ${id}\n=> Chữ nền: ${nen}\n=> Chữ ký: ${ky}\n=> Màu nền: ${color}`,attachment: fs.createReadStream(__dirname + "/cache/tad.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tad.png"),event.messageID); 
       return request(encodeURI(`https://www.phamvandienofficial.xyz/taoanhdep/avatarwibu?id=${id}&chu_nen=${nen}&chu_ky=${ky}&color=${color}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
    }
   }
 }
module.exports.run = async function({ api, event, args, permssion }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 if (this.config.credits != 'D-Jukie') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
	 else{
	 var avtAnimee = (await axios.get(`https://www.phamvandienofficial.xyz/taoanhdep/list`)).data
  if(args[0] == 'list') {
    var lengthID = [];
    var i =1
    var msg = []
    var msgg = []
    for (let id of avtAnimee) { 
        lengthID.push(id.imgAnime)
        const text3 = id.imgAnime.split("s0/").pop()
        const text1 = text3.substr(0, text3.indexOf('.')); 

        msgg.push(text1.charAt(0).toUpperCase() + text1.slice(1).replace("-", " "))
    }           
    var page = 1;
        page = parseInt(args[1]) || 1;
        page < -1 ? page = 1 : "";
    var limit = 30;
    var msg = "==== DANH SÁCH NHÂN VẬT ===\n\n";
    var numPage = Math.ceil(msgg.length / limit);
      for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= msgg.length) break;
          let name = msgg[i];                  
          msg +=` » ID: ${i+1}. ${name}\n`;             
      }
    msg += `\n» Trang ${page}/${numPage}\n`
    msg += `» Hiện tại có ${(lengthID.length)} nhân vật\n`
    return api.sendMessage(msg, threadID)}
	if (args[0] == "color") {
        var callback = () => api.sendMessage({body:`của bạn đây UwU`,attachment: fs.createReadStream(__dirname + "/cache/taoanhdep.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/taoanhdep.png"),event.messageID); 
       return request(encodeURI(`https://www.studytienganh.vn/upload/2017/08/40.jpg`)).pipe(fs.createWriteStream(__dirname+'/cache/taoanhdep.png')).on('close',() => callback());    
    } 
else if (args[0] == "search") {
	let nhanvat = args.join(" ");
	const res = await axios.get(`https://www.phamvandienofficial.xyz/taoanhdep/search?key=${nhanvat}`);
	var text = res.data.search.name;
	var idz = res.data.search.ID;
	var color = res.data.search.color;
	if (!nhanvat) return api.sendMessage(`Nhập id cần coi info đi -.- \nDùng ${global.config.PREFIX}taoanhdep list để coi danh sách nhân vật `, event.threadID, event.messageID);

return api.sendMessage(`===> Nhân Vật: ${text} \n===>  ID: ${idz}\n===> Màu Mặc Định: ${color}`, event.threadID, event.messageID)
}

else if (senderID == api.getCurrentUserID()) return;
    const name = this.config.name;
    var id = args[0];
    axios.get(`https://www.phamvandienofficial.xyz/taoanhdep/list`).then (res => {
      if (!res.data.listAnime[id]) return api.sendMessage(`Không tìm thấy dữ liệu!!!`,threadID,messageID);
      var names = res.data.listAnime[id].name;
   return api.sendMessage(`[!] Đã tìm thấy ID nhân vật : ${id}\n[!] Name nhân vật là ${res.data.listAnime[id].name}\n\n[!] Reply tin nhắn này và chọn chữ nền cho hình ảnh của bạn [!]`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
            type: "Binee",
            name,
            author: senderID,
            id: id,
            names,
            messageID: info.messageID
        });
    },event.messageID);
 })
}
}