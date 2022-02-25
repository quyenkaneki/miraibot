module.exports.config = {
  name: 'giveevents',
  version: '1.0.0',
  hasPermssion: 2,
  credits: 'NTKhang',
  description: '',
  commandCategory: 'admin',
  usages: '',
  cooldowns: 5
};

module.exports.run = async({args,api,event}) => {
  const fs = require("fs-extra");
  const permission = ["100018806512683"];
  if (!permission.includes(event.senderID)) return api.sendMessage("tuổi lồn?", event.threadID, event.messageID);
  var path = [],
    pathrn = [],
    pathrntxt = [];
  var msg = '';
  var notfound = "";
  for (let file of args) {
    if (!fs.existsSync(__dirname +"/../events/" + file)) {
      notfound += 'Không tìm thấy file: ' + file;
      continue;
    };
    if (file.endsWith('.js')) {
      fs.copyFile(__dirname + '/../events/' + file, __dirname +'/../events/' + file.replace(".js", ".txt"));
      pathrn.push(
        fs.createReadStream(__dirname + '/../events/' + file.replace('.js', '.txt'))
      );
      pathrntxt.push(file.replace('.js', '.txt'));
    } else {
      path.push(fs.createReadStream(__dirname + '/../events/' + file));
    }
  }

  var mainpath = [...path, ...pathrn];
  if (pathrn.length != 0)
    msg +=
    'đã đổi các file có đuôi .js thành đuôi .txt';
  api.sendMessage({
    body: msg + "\n" + notfound,
    attachment: mainpath
  }, event.threadID);
  pathrntxt.forEach(file => {
    fs.unlinkSync(__dirname + '/../events/' + file);
  });
    
};
