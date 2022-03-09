module.exports.config = {
name: "bot",
version: "1.0.1",
hasPermssion: 1,
credits: "Mirai team mod by kaneki",
description: "bot",
commandCategory: "admin",
usages: "test",
cooldowns: 5,
dependencies: {
    "pidusage": "",
    "fast-speedtest-api": ""
    }
};
function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args, Users, getText, Threads }) => {
  const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID);
const { ADMINBOT } = global.config;
const { commands } = global.client;
const { events } = global.client;
    const axios = require('axios');
    const request = require('request');
  const listAdmin = ADMINBOT || config.ADMINBOT || []; {
  var i = 1
        var msg = [];
    for (const idAdmin of listAdmin) {
if (parseInt(idAdmin)) {
const name = await Users.getNameUser(idAdmin);
msg.push(`${i++}: ${name}\nhttps://facebook.com/${idAdmin}`);
}
}
  }
    const fast = global.nodemodule["fast-speedtest-api"];
    const speedTest = new fast({
token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
verbose: false,
timeout: 10000,
https: true,
urlCount: 5,
bufferSize: 8,
unit: fast.UNITS.Mbps
});
const ketqua = await speedTest.getSpeed();
    const fs = require("fs");
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");    
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    const res = await axios.get(`https://apikanekiflop.tk/hearing`);
  var poem = res.data.data;
  const req = await axios.get(`https://apikanekiflop.tk/cadao`);
  var cadao = req.data.data;
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
  const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  var hi = ["Admin bot rất đẹp trai","Admin đang kiếm người yêu","Bạn sẽ bị ban nếu spam bot"];
  var know = hi[Math.floor(Math.random() * hi.length)];
    var d = new Date();
    var day = d.getDay()
if (day == 0) var day = "Chủ nhật"
else if (day == 1) var day = "Thứ hai"
else if (day == 2) var day = "Thứ ba"
else if (day == 3) var day = "Thứ tư"
else if (day == 4) var day = "Thứ năm"
else if (day == 5) var day = "Thứ sáu"
else if (day == 6) var day = "Thứ 7"
else if (day == 7) var day = "Chủ nhật"
else return console.log(day)
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
    axios.get('https://apikanekiflop.tk/gai').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
body: `» Chào ${name} «\nHôm nay là ${day} Ngày ${ngay} || ${thang} || ${nam}!\nBây giờ là: ${gio} : ${phut} : ${giay}\n====》 ADMIN 《====\n❯ ${msg.join("\n")}\n❤️─────────────────────❤️\n🐳Prefix Tổng: ${global.config.PREFIX}\n💤Prefix hiện tại: ${prefix}\n🐧Tên bot: ${global.config.BOTNAME}\n🏘️Threads: ${global.data.allThreadID.length}\n👥Users: ${global.data.allUserID.length}\n📺Cpu: ${pidusage.cpu.toFixed(1)}\n🎮Ram: ${byte2mb(pidusage.memory)}\n❗Delay: ${Date.now() - timeStart}ms\n📡Fast: ${ketqua} Mbs\n⚙Commands: ${commands.size}\n🔗Events: ${events.size}\n💬Thính: ${poem}\n💟Ca dao: ${cadao}\n●──────────────────────\n『Bạn có biết』: ${know}`,
                        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
                };
                request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
            })
}
