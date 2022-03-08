module.exports.config = {
    name: "taoanhdep",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu - D-Jukie",
    description: "Tạo ra một avt trên taoanhdep.",
    commandCategory: "image",
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
      case "tdunguwu": {
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
       return request(encodeURI(`https://api-12.chinhle4447.repl.co/avatarwibu?id=${id}&chu_nen=${nen}&chu_ky=${ky}&color=${color}`)).pipe(fs.createWriteStream(__dirname+'/cache/tad.png')).on('close',() => callback());    
    }
   }
 }
module.exports.run = async function({ api, event, args, permssion }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	 if (this.config.credits != 'tdunguwu - D-Jukie') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      } 
	
if (args[0] == "list") {
    axios.get(`https://api-12.chinhle4447.repl.co/taoanhdep/list`).then(res => {
      var count = res.data.listAnime.length;
      var data = res.data.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, threadID,messageID);
    });
  }
	else if (args[0] == "color") {
        var callback = () => api.sendMessage({body:`của bạn đây UwU`,attachment: fs.createReadStream(__dirname + "/cache/taoanhdep.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/taoanhdep.png"),event.messageID); 
       return request(encodeURI(`https://www.studytienganh.vn/upload/2017/08/40.jpg`)).pipe(fs.createWriteStream(__dirname+'/cache/taoanhdep.png')).on('close',() => callback());    
    } 
else if (args[0] == "search") {
	let nhanvat = args.join(" ");
	const res = await axios.get(`https://api-12.chinhle4447.repl.co/taoanhdep/search/id?id=${nhanvat}`);
	var text = res.data.search.name;
	var idz = res.data.search.ID;
	var color = res.data.search.color;
	if (!nhanvat) return api.sendMessage(`Nhập id cần coi info đi -.- \nDùng ${global.config.PREFIX}taoanhdep list để coi danh sách nhân vật `, event.threadID, event.messageID);

return api.sendMessage(`===> Nhân Vật: ${text} \n===>  ID: ${idz}\n===> Màu Mặc Định: ${color}`, event.threadID, event.messageID)
}

else {
    if (senderID == api.getCurrentUserID()) return;
    const name = this.config.name;
    var id = args[0];
    axios.get(`https://api-12.chinhle4447.repl.co/taoanhdep/list`).then (res => {
      if (!res.data.listAnime[id]) return api.sendMessage(`Không tìm thấy dữ liệu!!!`,threadID,messageID);
      var names = res.data.listAnime[id].name;
   return api.sendMessage(`[!] Đã tìm thấy ID nhân vật : ${id}[!]\n[!] Name nhân vật là ${res.data.listAnime[id].name}\n\n[!] Reply tin nhắn này và chọn chữ nền cho hình ảnh của bạn [!]`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
            type: "tdunguwu",
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
