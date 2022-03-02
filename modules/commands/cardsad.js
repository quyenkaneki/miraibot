const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 18
const colorName = "#00FF00"
module.exports.config = {
  name: "cardsad",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Võ Thành Trung",
  description: "Tạo card thông tin người dùng facebook v2",
  commandCategory: "info",
  usages: "",
  cooldowns: 1,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  if ((this.config.credits) != "Võ Thành Trung") { return api.sendMessage(`⚡️Phát hiện credits đã bị thay đổi`, event.threadID, event.messageID)}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/${senderID}123${threadID}.png`;
  let pathAvata = __dirname + `/cache/cardsad.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await axios.get(`http://api.leanhtruong.net/api/info?api_key=leanhtruong_VUTs9MLL3k512vAWTpX2&id=${uid}`); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.postimg.cc/8cP67XC4/252864140-3018987911678615-4670177082400283179-n.gif`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 45, 75, 165, 165);
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "not found";
    var love = res.data.user_love ? `${res.data.user_love}` : "not found"
    var location = res.data.location ? `${res.data.location}` : "not found"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "start";
  fontSize = 1000;
  ctx.fillText(`» Tên: ${res.data.fullname}`, 270, 85);
  ctx.fillText(`» Giới Tính: ${gender}`, 270, 120);
  ctx.fillText(`» Theo Dõi: ${res.data.follow_user}`, 270, 155);
  ctx.fillText(`» Tình Trạng: ${love}`, 270, 190);
  ctx.fillText(`» Ngày Sinh: ${birthday}`, 270, 225);
  ctx.fillText(`» Nơi Ở: ${location}`, 270, 260);
  ctx.fillText(`» UID: ${uid}`, 270, 295);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`» Profile: ${res.data.url_profile}`, 20, 370);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 