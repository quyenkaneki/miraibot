var request = require("request");const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
module.exports.config = {
  name: "bantaixiu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "DuyVuongUwU",
  description: "Bàn tài xỉu nhiều người chơi",
  commandCategory: "Game",
  usages: "[new/leave/start/end]",
  cooldowns: 5
};

module.exports.handleEvent = async function({ api, event, Currencies }) {
const fs = require("fs-extra");
const { threadID, messageID, body, senderID } = event;
const folderimg = __dirname + "/cache/randomimg";
	if (!fs.existsSync(folderimg)) fs.mkdir(folderimg);
	const listImg = fs.readdirSync(folderimg);

  const typ = ['tài', 'xỉu', 'ba mặt đồng nhất và nhà cái thắng'];
  const random = typ[Math.floor(Math.random() * typ.length)];  
  if (!body) return;
  if (body.toLowerCase() == 'tài' || body.toLowerCase() == 'xỉu' ||
body.toLowerCase() == 'ba mặt đồng nhất và nhà cái thắng') {
    const gameThread = global.taixiuS.get(threadID) || {};
    if (!gameThread) return;
    else {
      if (!gameThread.player.find(i => i.userID == senderID)) return;
      else {
        var s, q;
        var s = gameThread.player.findIndex(i => i.userID == senderID);
        var q = gameThread.player[s];
        if (q.choose.status == true) return api.sendMessage('𝗖𝗵𝗼̣𝗻 𝗿𝗼̂̀𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗼̣𝗻 𝗹𝗮̣𝗶!', threadID, messageID);
        else {
          const fs = require('fs-extra');
          const axios = require('axios');
         if (body.toLowerCase() == 'tài') {
            gameThread.player.splice(s, 1);
          gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'tài' } });
            api.sendMessage({body:"「 𝗖𝗼𝗻 𝘇𝗼̛̣ " + q.name + " 𝗱𝗮̃ 𝗱𝗮̣̆𝘁 𝗰𝘂̛̉𝗮 𝗧𝗔̀𝗜 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/274209594_2862844057349581_3826390908571570035_n.jpg")},threadID, messageID);  
             }
       if (body.toLowerCase() == 'xỉu') {
            gameThread.player.splice(s, 1);
            gameThread.player.push({ name: q.name, userID: senderID, choose: { status: true, msg: 'xỉu' } });
            api.sendMessage({body:"「 𝗖𝗼𝗻 𝘇𝗼̛̣ " + q.name + " 𝗱𝗮̃ 𝗱𝗮̣̆𝘁 𝗰𝘂̛̉𝗮 𝗫𝗜̉𝗨 」\n𝗖𝗵𝘂́𝗰 𝗲𝗺 𝗺𝗮𝘆 𝗺𝗮̆́𝗻 𝘃𝗮̀ 𝗻𝗵𝗮𝗻𝗵 𝗰𝗵𝗼́𝗻𝗴 𝘃𝗲̂̀ 𝘃𝗼̛́𝗶 𝗰𝗮́𝘁 𝗯𝘂̣𝗶 𝗻𝗵𝗲́",attachment: createReadStream(__dirname + "/cache/274182375_1308156316336656_5879771458750454501_n.jpg")},threadID, messageID); 
        }                            
          var vv = 0,
              vvv = gameThread.player.length;
          for (var c of gameThread.player) {
            if (c.choose.status == true) vv++;
          }
          if (vv == vvv) {
            api.sendMessage({body: "𝗗𝗮𝗻𝗴 𝗱𝗮̣̂𝗽 𝗮̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝗮𝗻𝗴 𝗹𝗮̆́𝗰 !!!", attachment: createReadStream(__dirname + "/cache/274297685_2158259004350383_5647311325695705236_n.gif")},threadID,async  (err, data)  => { 
              if (err) return api.sendMessage(err, threadID, messageID);
              setTimeout(async function () {
                api.unsendMessage(data.messageID);
                  var ketqua = random
                  var win = [];
                  var lose = [];
                  if (ketqua.indexOf('tài') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'tài') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
                  }
             if (ketqua.indexOf('xỉu') == 0) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'xỉu') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
              }
             if (ketqua.indexOf('ba mặt đồng nhất và nhà cái thắng') == false) {
                    for (var i of gameThread.player) {
                      if (i.choose.msg == 'ba mặt đồng nhất và nhà cái thắng') {
                        win.push({ name: i.name, userID: i.userID });
                      }
                      else {
                        lose.push({ name: i.name, userID: i.userID });
                      }
                    }
  }
                  var msg = '◆━━𝗕𝗔̀𝗡 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨━━◆\n🎲 𝗞𝗘̂́���� 𝗤𝗨𝗔̉ 𝗟𝗔̀ ' + ketqua.toUpperCase() + ' 🎲\n\n➣ 𝗡𝗵𝘂̛̃𝗻𝗴 𝗰𝗼𝗻 𝘇𝗼̛̣ 𝘁𝗵𝗮̆́𝗻𝗴 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗼𝗻𝗴 𝘃𝗮́𝗻 𝗻𝗮̀𝘆:\n';
                  var dem_win = 0;
                  var dem_lose = 0;
                  for (var w of win) {
                    await Currencies.increaseMoney(w.userID, parseInt(gameThread.money));
                    dem_win++;
                    msg += dem_win + '. ' + w.name + '\n𝗜𝗗: ' + w.userID + '\n';
                  }
                  for (var l of lose) {
                    await Currencies.decreaseMoney(l.userID, parseInt(gameThread.money));
                    if (dem_lose == 0) {
                      msg += '\n➣ 𝗡𝗵𝘂̛̃𝗻𝗴 𝗰𝗼𝗻 𝘇𝗼̛̣ 𝘁𝗵𝘂𝗮 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗼𝗻𝗴 𝘃𝗮́𝗻 𝗻𝗮̀𝘆:\n';
                    }
                    dem_lose++;
                    msg += dem_lose + '. ' + l.name + '\n𝗜𝗗: ' + l.userID + '\n';
                  }
                  msg += '\n💸 𝗕𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝗰𝗵𝘂𝗻𝗴 𝘁𝗶𝗲̂̀𝗻:\n';
                  msg += '• 𝗧𝗵𝗮̆́𝗻𝗴 𝘀𝗲̃ 𝗻𝗵𝗮̣̂𝗻 𝗱𝘂̛𝗼̛̣𝗰 ' + gameThread.money + '$ \n';
                  msg += '• 𝗧𝗵𝘂𝗮 𝘀𝗲̃ 𝗯𝗶̣ 𝘁𝗿𝘂̛̀ ' + gameThread.money + '$ \n\n➣ 𝗛𝗮̃𝘆 𝗸𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝘃𝗮̀ 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗺𝗼̛́𝗶 𝗱𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗻𝗶𝗲̂̀𝗺 𝗱𝗮𝗺 𝗺𝗲̂ 𝗻𝗴𝗵𝗶𝗲̣̂𝗻 𝗻𝗴𝗮̣̂𝗽 𝗻𝗵𝗲́...𝗖𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻!!!\n\n◆━𝗧𝗵𝗮𝗻𝗸𝘀 𝗔𝗹𝗹 𝗨𝘄𝗨━◆';
                  return api.sendMessage({body: msg + "\n", attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID);
              }, 5000);
            });
          }
          else return;
        }
      }
    }
  }
}
module.exports.run = async function({ api, event, args, Threads, Users, Currencies }) {
  try {
    if (!global.taixiuS) global.taixiuS = new Map();

    const { threadID, messageID, senderID } = event;
    var gameThread = global.taixiuS.get(threadID);

    if (args[0] == 'create' || args[0] == 'new' || args[0] == '-c') {
      if (!args[1] || isNaN(args[1])) return api.sendMessage('𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗵𝗼̛̣𝗽 𝗹𝗲̣̂!', threadID, messageID);
      if (parseInt(args[1]) < 1000) return api.sendMessage('𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝗽𝗵𝗮̉𝗶 𝗹𝗼̛́𝗻 𝗵𝗼̛𝗻 𝗵𝗼𝗮̣̆𝗰 𝗯𝗮̆̀𝗻𝗴 1000$!', threadID, messageID);
      var check = await checkMoney(senderID, args[1]);
      if (check == false) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗱𝘂̉ ' + args[1] + '$ 𝗱𝗲̂̉ 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗺𝗼̛́𝗶!\n𝗛𝗮̃𝘆 𝗸𝗶𝗲̂́𝗺 𝘁𝗵𝗲̂𝗺 𝘁𝗶𝗲̂̀𝗻 𝗱𝗲̂̉ 𝘁𝗶𝗲̂́𝗽 𝘁𝘂̣𝗰 𝗰𝘂𝗼̣̂𝗰 𝘇𝘂𝗶 𝗰𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻!', threadID, messageID);
      if (global.taixiuS.has(threadID)) return api.sendMessage('𝗡𝗵𝗼́𝗺 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗺𝗼̛̉ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲!', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      global.taixiuS.set(threadID, { box: threadID, start: false, author: senderID, player: [{ name, userID: senderID, choose: { status: false, msg: null } }], money: parseInt(args[1]) });
      return api.sendMessage('➣ 𝗧𝗮̣𝗼 𝗯𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝘃𝗼̛́𝗶 𝗺𝘂̛́𝗰 𝗰𝘂̛𝗼̛̣𝗰 𝗹𝗮̀ ' + parseInt(args[1]) + '$\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘀𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮: 1\n• 𝗠𝘂𝗼̂́𝗻 𝗸𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 ' + global.config['PREFIX'] + this.config.name + ' end\n• 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 𝗱𝘂̀𝗻𝗴 ' + global.config['PREFIX'] + this.config.name + ' join', threadID);
    }
    else if (args[0] == 'join' || args[0] == '-j') {
      if (!global.taixiuS.has(threadID)) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗻��̀𝗼 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆!\n𝗛𝗮̃𝘆 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗺𝗼̛́𝗶 𝗯𝗮̆̀𝗻𝗴 𝗰𝗮́𝗰𝗵 /bantaixiu new + tiền 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗰𝗵𝗼̛𝗶 𝗻𝗵𝗲́!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘁𝗿𝘂̛𝗼̛́𝗰 𝗸𝗵𝗶 𝗯𝗮̣𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗻𝗲̂𝗻 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆 𝘀𝗮𝘂 𝗸𝗵𝗶 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗵𝗮́𝗰 𝗰𝗵𝗼̛𝗶 𝘅𝗼𝗻𝗴!', threadID, messageID);
      var check = await checkMoney(senderID, gameThread.money);
      if (check == false) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̉ ' + gameThread.money + '$ 𝗱𝗲̂̉ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮!\n𝗛𝗮̃𝘆 𝗸𝗶𝗲̂́𝗺 ��𝗵𝗲̂𝗺 𝘁𝗶𝗲̂̀𝗻 𝗿𝗼̂̀𝗶 𝗾𝘂𝗮𝘆 𝗹𝗮̣𝗶 𝗰𝗵𝘂́𝗰 𝗺𝗮𝘆 𝗺𝗮̆́𝗻', threadID, messageID);
      if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗮̣𝗻 𝗱𝗮̃ 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝘆!', threadID, messageID);
      var name = await Users.getNameUser(senderID);
      gameThread.player.push({ name, userID: senderID, choose: { stats: false, msg: null } });
      global.taixiuS.set(threadID, gameThread);
      return api.sendMessage('➣ 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝘀𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗹𝗮̀ ' + gameThread.player.length + ' \n• 𝗧𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗮́𝗰 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝗺 𝗴𝗶𝗮 𝗵𝗮̃𝘆 𝗯𝗮̂́𝗺 /bantaixiu join', threadID, messageID);
    }
    else if (args[0] == 'leave' || args[0] == '-l') {
      if (!global.taixiuS.has(threadID)) return api.sendMessage('𝗛𝗶��̣̂𝗻 𝘁𝗮̣𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝗼 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗯𝗮̀𝗻 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗕𝗮̀𝗻 𝗱𝗮̃ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝗰𝗵𝗼̛𝗶 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗿𝗼̛̀𝗶!', threadID, messageID);
      if (gameThread.author == senderID) {
        global.taixiuS.delete(threadID);
        var name = await Users.getNameUser(senderID);
        return api.sendMessage('➣ 𝗖𝗼𝗻 𝘇𝗼̛̣ ' + name + ' 𝗱𝗮̃ 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻\n• 𝗕𝗮̀𝗻 𝗻𝗮̀𝘆 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗴𝗶𝗮̉𝗶 𝘁𝗮́𝗻!', threadID, messageID);
      }
      else {
        gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
        global.taixiuS.set(threadID, gameThread);
        var name = await Users.getNameUser(senderID);
        api.sendMessage('𝗖𝗼𝗻 𝘇𝗼̛̣ 𝗿𝗼̛̀𝗶 𝗯𝗮̀𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!', threadID, messageID);
        return api.sendMessage('➣ 𝗖𝗼𝗻 𝘇𝗼̛̣ ' + name + ' 𝗱𝗮̃ 𝗿𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻!\n• 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̀𝗶 𝗯𝗮̀𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝗹𝗮̀ ' + gameThread.player.length + ' 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻', threadID);
      }
    }
    else if (args[0] == 'start' || args[0] == '-s') {
      if (!gameThread) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗻𝗮̀𝗼 𝗼̛̉ 𝗻𝗵𝗼́𝗺 𝗻𝗮̀𝘆!', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂', threadID, messageID);
      if (gameThread.player.length <= 1) return api.sendMessage('𝗕��̀𝗻 𝗰𝗵𝘂̛𝗮 𝗱𝘂̉ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗱𝗲̂̉ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂!!!', threadID, messageID);
      if (gameThread.start == true) return api.sendMessage('𝗕𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗱𝗮̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗯𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘁𝘂̛̀ 𝘁𝗿𝘂̛𝗼̛́𝗰', threadID, messageID);
      gameThread.start = true;
      global.taixiuS.set(threadID, gameThread);
      return api.sendMessage({body: "◆𝗧𝗥𝗢̀ 𝗖𝗛𝗢̛𝗜 𝗕𝗔̆́𝗧 𝗗𝗔̂̀𝗨◆\n\n「 𝗫𝗶𝗻 𝗺𝗼̛̀𝗶 " + gameThread.player.length + " 𝗰𝗼𝗻 𝘇𝗼̛̣ 𝗻𝗴𝗵𝗶𝗲̣̂𝗻 𝗻𝗴𝗮̣̂𝗽 𝗰𝘂̉𝗮 𝗺𝗶̣ 𝗱𝗮̣̆𝘁 𝗰𝘂̛̉𝗮 𝗧𝗔̀𝗜 𝗵𝗼𝗮̣̆𝗰 𝗫𝗜̉𝗨 𝗱𝗲̂̉ 𝗰𝗵𝗼̛𝗶 」",attachment: createReadStream(__dirname + "/cache/274221615_632733751117078_2633530530504954193_n.jpg")},threadID, messageID);
    }
    else if (args[0] == 'end' || args[0] == '-e') {
      if (!gameThread) return api.sendMessage('𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝗵𝘂̛𝗮 𝗰𝗼́ 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝗻𝗮̀𝗼 𝗱𝘂̛𝗼̛̣𝗰 𝘁𝗮̣𝗼!', threadID, messageID);
      if (gameThread.author != senderID) return api.sendMessage('𝗕𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮̣𝗼 𝗯𝗮̀𝗻 𝗻𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝘅𝗼́𝗮', threadID, messageID);
      global.taixiuS.delete(threadID);
      return api.sendMessage('𝗞𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗴𝗮𝗺𝗲 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!', threadID, messageID);
    }
    else {
      return api.sendMessage({body: "◆━━𝗕𝗔̀𝗡 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨━━◆\n\n「 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 」\n\n➣ /bantaixiu new + tiền • 𝗧𝗮̣𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /bantaixiu join • 𝗧𝗵𝗮𝗺 𝗴𝗶𝗮 𝘃𝗮̀𝗼 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /bantaixiu leave • 𝗥𝗼̛̀𝗶 𝗸𝗵𝗼̉𝗶 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n➣ /bantaixiu start • 𝗕𝗮̆́𝘁 𝗱𝗮̂̀𝘂 𝘃𝗮́𝗻 𝗰𝗵𝗼̛𝗶\n➣ /bantaixiu end • 𝗞𝗲̂́𝘁 𝘁𝗵𝘂́𝗰 𝗯𝗮̀𝗻 𝗰𝗵𝗼̛𝗶\n\n「 𝗟𝘂𝗮̣̂𝘁 𝗰𝗵𝗼̛𝗶 」\n\n• 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝘀𝗲̃ 𝗱𝘂̛𝗼̛̣𝗰 𝗱𝗮̣̆𝘁 𝗰𝘂̛𝗼̛̣𝗰 𝗧𝗮̀𝗶 𝗵𝗼𝗮̣̆𝗰 𝗫𝗶̉𝘂 𝗸𝗵𝗶 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗰𝗵𝗼 𝗿𝗮 𝗧𝗮̀𝗶 𝘁𝗵𝗶̀ 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗱𝗮̣̆𝘁 𝗧𝗮̀𝗶 𝘀𝗲̃ 𝗱����̀𝗻𝗵 𝗰𝗵𝗶𝗲̂́𝗻 𝘁𝗵𝗮̆́𝗻𝗴 𝗰𝗼̀𝗻 𝗻𝗵𝘂̛̃𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗵𝗼̛𝗶 𝗱𝗮̣̆𝘁 𝗫𝗶̉𝘂 𝘀𝗲̃ 𝘁𝗵𝘂𝗮 𝘃𝗮̀ 𝗻𝗴𝘂̛𝗼̛̣𝗰 𝗹𝗮̣𝗶\n• 𝗧𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗵𝗼̛̣𝗽 𝗱𝗮̣̆𝘁 𝗯𝗶𝗲̣̂𝘁 𝗻𝗲̂́𝘂 𝗰𝗮̉ 𝗯𝗮 𝗰𝘂̣𝗰 𝘅𝗶́ 𝗻𝗴𝗮̂̀𝘂 𝗰𝗵𝗼 𝗿𝗮 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗰𝘂̀𝗻𝗴 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝘁𝗵𝗶̀ 𝗻𝗵𝗮̀ 𝗰𝗮́𝗶 𝘀𝗲̃ 𝘁𝗵𝗮̆́𝗻𝗴 𝘃𝗮̀ 𝗯𝗮̣𝗻 𝘀𝗲̃ 𝘁𝗵𝘂𝗮 𝗱𝘂̀ 𝗱𝗮̣̆𝘁 𝗯𝗮̂́𝘁 𝗸𝗶̀ 𝗰𝘂̛̉𝗮 𝗻𝗮̀𝗼", attachment: createReadStream(__dirname + "/cache/273881795_1014366132850810_3366095489097377512_n.png")},threadID, messageID);
    }
  }
  catch (err) {
    return api.sendMessage('𝗖𝗢́ 𝗟𝗢̂̃𝗜 𝗫𝗔̉𝗬 𝗥𝗔 𝗞𝗛𝗜 𝗧𝗛𝗨̛̣𝗖 𝗛𝗜𝗘̣̂𝗡 𝗟𝗘̣̂𝗡𝗛 𝗩𝗨𝗜 𝗟𝗢̀𝗡𝗚 𝗧𝗛𝗨̛̉ 𝗟𝗔̣𝗜 𝗦𝗔𝗨: ' + err, event.threadID, event.messageID);
  }
  async function checkMoney(senderID, maxMoney) {
    var i, w;
    i = (await Currencies.getData(senderID)) || {};
    w = i.money || 0
    if (w < parseInt(maxMoney)) return false;
    else return true;
  }
}
