module.exports.config = {
	name: "age",
	version: "1.0.0",
	hasPermssion: 0,
	credits: ".",
	description: "Đếm tuổi",
	commandCategory: "Đếm ngày",
	usages: "[ngày/tháng/năm sinh]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var dau = args[0];
if (!dau) return api.sendMessage(`Vui lòng nhập đúng format: age + DD/MM/YYYY`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	const moment = require("moment-timezone");
	var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
	axios.get(`https://le31.glitch.me/other/date-calculator?first=${dau}&second=${hientai}`).then(res => {
     var nam = res.data.years;
     var thang = res.data.months;
     var tuan = res.data.weeks;
     var ngay = res.data.days;
     var gio = res.data.hours;
     var phut = res.data.minutes;
     var giay = res.data.seconds;
     return api.sendMessage(`📆 Ngày tháng năm sinh: ${dau}\n\n⏱ Số năm đã qua: ${nam} năm \n\n⏱ Số tháng đã qua: ${thang} tháng \n\n⏱ Số tuần đã qua: ${tuan} tuần \n\n⏱ Số ngày đã qua: ${ngay} ngày \n\n⏱ Số giờ đã qua: ${gio} giờ \n\n⏱ Số phút đã qua: ${phut} phút \n\n⏱ Số giây đã qua: ${giay} giây `,event.threadID,event.messageID);
	});
}
}
