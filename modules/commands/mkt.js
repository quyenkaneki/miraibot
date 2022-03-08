module.exports.config = {
  name: "mkt",  
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "DVB",
  description: "Tạo Banner marketing Gradient giống taoanhdep", 
  commandCategory: "Edit",
  usages: "Tên|Tên phụ|Facebook|mail|Sdt|vị trí",
  cooldowns: 15,
};

const//////////////////////////////////////////////////////////////////////
  capi     = "https://database-test.bangprocode.repl.co/edit/mkt?", // API
  apikey   = "DVB",                                                      // API Key
  pathsave = __dirname + `/cache/banner.png`,                            // Lưu vào Cache
///////////// Hãy chỉnh msg theo ý bạn! ///////////////////////////////////
  msg3     = "Đang render ảnh! Vui lòng chờ giây lát",
  msg4     = "Banner marketing Gradient của bạn đây 😃";

module.exports.run = async function ({api,event,args}) {
const axios = require('axios');
const fs = require("fs-extra");
const qs = require("querystring");
const { threadID, messageID, senderID } = event;
let uid = senderID;

const ct = args.join(" ").split("|").map(item => item = item.trim());
const text1 = ct[0],
      text2 = ct[1],
      fb    = ct[2],
      ma    = ct[3],
      tl    = ct[4],
      lc    = ct[5];
let params = {apikey,text1,text2,fb,ma,tl,lc,uid};
    params = qs.stringify(params);

  api.sendMessage(msg3 + " " + uid,threadID,messageID);

var inimg = (await axios.get(capi + params,{responseType: "arraybuffer"})).data;

fs.writeFileSync(pathsave, Buffer.from(inimg));

  return api.sendMessage({body:msg4, attachment: fs.createReadStream(pathsave)}, threadID, () => fs.unlinkSync(pathsave), messageID)
}
module.exports.languages = {"vi": {}} // Chống báo nỗi languages!
