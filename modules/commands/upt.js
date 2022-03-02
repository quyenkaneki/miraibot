module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Hệ thống",
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

module.exports.run = async ({ api, event,args, Users, getText }) => {
	const { threadID, messageID } = event;
const { ADMINBOT } = global.config;
    const { userName } = global.data;
	const axios = global.nodemodule["axios"];
	const { commands } = global.client;
		const fast = global.nodemodule["fast-speedtest-api"]
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
	const request = require('request');
	const res = await axios.get(`https://jrt-api.j-jrt-official.repl.co/hearing`);
var poem = res.data.data;
  const req = await axios.get(`https://jrt-api.j-jrt-official.repl.co/cadao`);
var cadao = req.data.data;
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");    
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    var ngay = moment.tz("Asia/Ho_Chi_Minh").format("D");
    var thang = moment.tz("Asia/Ho_Chi_Minh").format("MM");
    var nam = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
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
    let name = await Users.getNameUser(event.senderID)
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
	var i = 1
        var msg = [];
	const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = userName.get(idAdmin) || await Users.getNameUser(idAdmin);
                    msg.push(`${i++}: ${name}\n📌https://facebook.com/${idAdmin}`)
                }
            }
   const namebot = config.BOTNAME
	const prefix = config.PREFIX
	axios.get('https://api-kanekidz.herokuapp.com/gaisexy').then(res => {
 let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
 let callback = function () {
     api.sendMessage({body: `» Chào ${name} «\n➢ Hôm nay là ${day} (${ngay}||${thang}||${nam}!\n➢ Bây giờ là: ${gio}:${phut}:${giay}\n╭────╮\nAdmin\n╰────╯\n➢ ${msg.join("\n")}\n➢ Bot on: ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây.\n➢ Tên bot: ${namebot}\n➢ Prefix: ${global.config.PREFIX}\n➢ Version: 1.2.14\n➢ Nhóm: ${global.data.allThreadID.length}\n➢ Người dùng: ${global.data.allUserID.length}\n➢ Cpu: ${pidusage.cpu.toFixed(1)}\n➢ Ram: ${byte2mb(pidusage.memory)}\n➢ Delay: ${Date.now() - timeStart}ms\n➢ Fast: ${ketqua} Mbs\n➢ Thính: ${poem}\n➢ Ca dao: ${cadao}`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback);
   })
}