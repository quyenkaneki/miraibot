module. exports. config = {
    name: "autoreset",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Thời gian",
    commandCategory: "Hệ thống",
    cooldowns: 5
}
module. exports. handleEvent = async function({ api, event, args, Users,Threads }) {
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
  var idad = global.config.ADMINBOT;    
  console.log(timeNow)
  var seconds = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  var timeRestart_1 = `12:00:${seconds}`
  var timeRestart_2 = `15:00:${seconds}`
  var timeRestart_3 = `18:00:${seconds}`
  var timeRestart_4 = `21:00:${seconds}`
  var timeRestart_5 = `00:00:${seconds}`
  var timeRestart_6 = `03:00:${seconds}`
  var timeRestart_7 = `06:00:${seconds}`
  var timeRestart_8 = `09:00:${seconds}`
  //console.log(timeNowRestart)
  if ((timeNow == timeRestart_1 || timeNow == timeRestart_2 || timeNow == timeRestart_3|| timeNow == timeRestart_4|| timeNow == timeRestart_5|| timeNow == timeRestart_6 || timeNow == timeRestart_7|| timeNow == timeRestart_8) && seconds < 6 ) {
    for( let ad of idad) {
  setTimeout(() =>
          api.sendMessage(`⚡️Bây giờ là: ${timeNow}\nBé sẽ tiến hành khởi động lại!!!`,ad, () =>process.exit(1)), 1000);
    }
    }
}
module. exports. run = async  ({ api, event, args }) => {
      const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
        api.sendMessage(`${timeNow}`, event.threadID)
}
