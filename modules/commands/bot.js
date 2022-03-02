module.exports.config = {
name: "bot",
version: "1.0.1",
hasPermssion: 0,
credits: "Kaneki",
description: "bot",
commandCategory: "admin",
usages: "test",
cooldowns: 5,
};
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
const { threadID, messageID } = event;
let name = await Users.getNameUser(event.senderID);
const { ADMINBOT } = global.config;
const { commands } = global.client;
const { events } = global.client;
const axios = require('axios');
const request = require('request');
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
const res = await axios.get(`https://apikanekiflop.tk/hearing`);
var poem = res.data.data
const listAdmin = ADMINBOT || config.ADMINBOT || []; {
        // const moment = require("moment-timezone");
        const prefix = config.PREFIX
        const namebot = config.BOTNAME
        const dateNow = Date.now();
        var i = 1
        var msg = [];
        // const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
        // const thu = moment().weekday();
        /*
         switch (thu) {
             case 0: {
                 textt = "Thứ Hai"
                 break;
             }
             case 1: {
                 textt = "Thứ Ba"
                 break;
             }
             case 2: {
                 textt = "Thứ Tư"
                 break;
             }
             case 3: {
                 textt = "Thứ Năm"
                 break;
             }
             case 4: {
                 textt = "Thứ Sáu"
                 break;
             }
             case 5: {
                 textt = "Thứ Bảy"
                 break;
             }
             default: {
                 textt = "Chủ Nhật"
             }
         }
         */
        // Đối tượng thời gian hiện tại
        var d = new Date();
        const bb = d.getDate();
        const cc = d.getDay();
        const qq = d.getFullYear();
        const ss = d.getYear();
        const zz = d.getHours();
        const rr = d.getMilliseconds();
        const tt = d.getMinutes();
        const yy = d.getMonth();
        const uu = d.getSeconds();
        const ii = d.getTime();
        switch (cc) {
            case 0: {
                textt = "Chủ Nhật"
                break;
            }
            case 1: {
                textt = "Thứ Hai"
                break;
            }
            case 2: {
                textt = "Thứ Ba"
                break;
            }
            case 3: {
                textt = "Thứ Bốn"
                break;
            }
            case 4: {
                textt = "Thứ Năm"
                break;
            }
            case 5: {
                textt = "Thứ Sáu"
                break;
            }
            default: {
                textt = "Chủ Bảy"
            }
        }
        switch (yy) {
            case 0: {
                texttt = "1"
                break;
            }
            case 1: {
                texttt = "2"
                break;
            }
            case 2: {
                texttt = "3"
                break;
            }
            case 3: {
                texttt = "4"
                break;
            }
            case 4: {
                texttt = "5"
                break;
            }
            case 5: {
                texttt = "6"
                break;
            }
            case 6: {
                texttt = "7"
                break;
            }
            case 7: {
                texttt = "8"
                break;
            }
            case 8: {
                texttt = "9"
                break;
            }
            case 9: {
                texttt = "10"
                break;
            }
            case 10: {
                texttt = "11"
                break;
            }
            default: {
                texttt = "12"
            }
        }
        for (const idAdmin of listAdmin) {
            if (parseInt(idAdmin)) {
                const name = await Users.getNameUser(idAdmin);
                msg.push(`${i++}: ${name}\nhttps://facebook.com/${idAdmin}`);
            }
        }
        axios.get('https://apikanekiflop.tk/gaisexy').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let cadao = res.data.cadao.substring(res.data.cadao.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
body: `Chào ${name}\nHôm nay là ${textt} (${bb}/${texttt}/${qq})\n====》 ADMIN 《====\n❯ ${msg.join("\n")}\n❤️──────────────❤️\n❯ PREFIX: ${prefix}\n❯ BOT NAME: ${namebot}\n❯ PING: ${Date.now() - dateNow}\n❯ FAST: ${ketqua}\n❯ THREADS: ${global.data.allThreadID.length}\n❯ USERS: ${global.data.allUserID.length}\n❯ COMMANDS: ${commands.size}\n❯ EVENTS: ${events.size}\n💬Thính: ${poem}\n💟Ca dao: ${cadao}\n» 🎭Mirai Bot🎭 «`,
                        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
                };
                request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
            })
}
}
