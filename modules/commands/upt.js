module.exports.config = {
name: "upt",
version: "1.0.1",
hasPermssion: 1,
credits: "Mirai-Kaneki",
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
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID);
const { ADMINBOT } = global.config;
const { commands } = global.client;
const axios = global.nodemodule["axios"];
const request = require('request');
const fast = global.nodemodule["fast-speedtest-api"];
  const kk=global.data.threadData.get(parseInt(threadID))||{};
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
const res = await axios.get(`https://apikanekiflop.tk/hearing`);
var poem = res.data.data
const req = await axios.get(`https://apikanekiflop.tk/cadao`)
  var cadao = res.data.data
const listAdmin = ADMINBOT || config.ADMINBOT || []; {
        const prefix = kk.PREFIX||global.config.PREFIX;
        const namebot = config.BOTNAME
        const dateNow = Date.now();
        var i = 1
        var msg = [];
        var d = new Date();
        const ngay = d.getDate();
        const cc = d.getDay();
        const nam = d.getFullYear();
        const ss = d.getYear();
        const zz = d.getHours();
        const rr = d.getMilliseconds();
        const tt = d.getMinutes();
        const yy = d.getMonth();
        const uu = d.getSeconds();
        const ii = d.getTime();
        switch (cc) {
            case 0: {
                thu = "Chủ Nhật"
                break;
            }
            case 1: {
                thu = "Thứ Hai"
                break;
            }
            case 2: {
                thu = "Thứ Ba"
                break;
            }
            case 3: {
                thu = "Thứ Bốn"
                break;
            }
            case 4: {
                thu = "Thứ Năm"
                break;
            }
            case 5: {
                thu = "Thứ Sáu"
                break;
            }
            default: {
                thu = "Chủ Bảy"
            }
        }
        switch (yy) {
            case 0: {
                thang = "1"
                break;
            }
            case 1: {
                thang = "2"
                break;
            }
            case 2: {
                thang = "3"
                break;
            }
            case 3: {
                thang = "4"
                break;
            }
            case 4: {
                thang = "5"
                break;
            }
            case 5: {
                thang = "6"
                break;
            }
            case 6: {
                thang = "7"
                break;
            }
            case 7: {
                thang = "8"
                break;
            }
            case 8: {
                thang = "9"
                break;
            }
            case 9: {
                thang = "10"
                break;
            }
            case 10: {
                thang = "11"
                break;
            }
            default: {
           thang = "12"
}
}
for (const idAdmin of listAdmin) {
if (parseInt(idAdmin)) {
const name = await Users.getNameUser(idAdmin);
msg.push(`${i++}: ${name}\nhttps://facebook.com/${idAdmin}`);
}
}
  var hi = ["Admin bot rất đẹp trai","Admin đang kiếm người yêu","Bạn sẽ bị ban nếu spam bot"];
  var know = hi[Math.floor(Math.random() * hi.length)];
const time = process.uptime(),
days = Math.floor(time / (60 * 60 * 60)),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const pidusage = await global.nodemodule["pidusage"](process.pid);
const timeStart = Date.now();
axios.get('https://apikanekiflop.tk/gaisexy').then(res => {
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
body: `» Chào ${name} «\nHôm nay là ${thu} (${ngay}/${thang}/${nam})\nBây giờ là: ${gio}:${phut}:${giay}\n====》 ADMIN 《====\n❯ ${msg.join("\n")}\n❤️─────────────────────❤️\n〽 Dấu lệnh của bot: ${prefix}\n🐧 Tên bot: ${namebot}\n🖥Bot on: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây.\n💻 Cpu: ${pidusage.cpu.toFixed(1)}\n🕹 Ram: ${byte2mb(pidusage.memory)}\n‼ Delay: ${Date.now() - dateNow}\n📡 Tốc độ mạng: ${ketqua} Mb/s\n🏘 Tổng số nhóm: ${global.data.allThreadID.length}\n👥 Tổng số người dùng: ${global.data.allUserID.length}\n⚙ Tổng lệnh có thể sài: ${commands.size}\n💬Thính: ${poem}\n💟Ca dao: ${cadao}\n●──────────────────────\n『Bạn có biết』: ${know}`,
attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
};
request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
})
}
}
