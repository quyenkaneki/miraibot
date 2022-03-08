module.exports.config = {
  name: "socialdl",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ttk",
  description: "wanted",
  commandCategory: "Giải trí",
  usages: "",
  cooldowns: 10,
  dependencies: {
     "axios":"",
     "fs-extra":""
  },
};


module.exports.run = async function ({ event, api, global, Config, logger, Threads, Users, args, body, is }) {
  try{
var ag = args.join(" ").split(" - ");
var text1 = ag[0],
    text2 = ag[1];
if(!text1){
  return api.sendMessage(`Sai cách sử dụng\nNhập =>socialdl help để xem hướng dẫn`, event.threadID)
}
let app = {
  "facebook" : 0,
  "instagram": 1,
  "tiktok": 2,
  "pinterest": 3,
  "help": 4
}
if (!Object.keys(app).includes(text1)) return api.sendMessage("Lựa chọn không hợp lệ\n\nVui lòng nhập =>socialdl help để xem hướng dẫn", event.threadID);
if(text1 == "facebook"){
  const res = await axios.get(`https://api-ttk.herokuapp.com/social/fbdl?link=${text2}`);
  var get = res.data.medias[1].url;
  console.log(get)
  let callback = function () {
          api.sendMessage({
              attachment: fs.createReadStream(__dirname + `/cache/socialdlfb.mp4`)
          }, event.threadID, () => fs.statSync(__dirname + `/cache/socialdlfb.mp4`), event.messageID);
        };
          request(get).pipe(fs.createWriteStream(__dirname + `/cache/socialdlfb.mp4`)).on("close", callback);
}
if(text1 == "instagram"){
  const res1 = await axios.get(`https://api-ttk.herokuapp.com/social/fbdl?link=${text2}`);
  var insta = res1.data.medias[0].url;
  console.log(insta)
    let callback = function () {
          api.sendMessage({
              attachment: fs.createReadStream(__dirname + `/cache/socialdlins.mp4`)
          }, event.threadID, () => fs.statSync(__dirname + `/cache/socialdlins.mp4`), event.messageID);
        };
          request(insta).pipe(fs.createWriteStream(__dirname + `/cache/socialdlins.mp4`)).on("close", callback);
}
if(text1 == "tiktok"){
  const res2 = await axios.get(`https://api-ttk.herokuapp.com/social/fbdl?link=${text2}`);
  var tiktok = res2.data.medias[1].url;
  console.log(tiktok)
    let callback = function () {
          api.sendMessage({
              attachment: fs.createReadStream(__dirname + `/cache/tiktok.mp4`)
          }, event.threadID, () => fs.statSync(__dirname + `/cache/tiktok.mp4`), event.messageID);
        };
          request(tiktok).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.mp4`)).on("close", callback);  
}
if(text1 == "help"){
  return api.sendMessage(`Hướng Dẫn Sử Dụng Social Download\n\n-Example : =>socialdl <app> - <link>\n\n- Các app được hỗ trợ : Facebook, Instagram, Pinterest, Tiktok`, event.threadID);
}
if(text1 == "pinterest"){
  const res3 = await axios.get(`https://api-ttk.herokuapp.com/social/fbdl?link=${text2}`);
  var pinterest = res3.data.medias[0].url;
  console.log(pinterest)
    let callback = function () {
          api.sendMessage({
              attachment: fs.createReadStream(__dirname + `/cache/tiktok.mp4`)
          }, event.threadID, () => fs.statSync(__dirname + `/cache/tiktok.mp4`), event.messageID);
        };
          request(pinterest).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.mp4`)).on("close", callback);   
}
} catch(err){
  console.log(err)
  return api.sendMessage("Đã xảy ra lỗi hoặc api die", event.threadID);
}
}
