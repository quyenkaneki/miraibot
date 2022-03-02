module.exports.config = {
	name: "rankcard",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Siêu Đáng Yêu - mod by JRT",
	description: "Lấy rank hiện tại của bạn trên hệ thống bot kèm khung theo level của bạn, remake rank_card from canvacord",
	commandCategory: "box",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
		"path": "",
		"jimp": "",
		"node-superfetch": "",
		"canvas": ""
	}
};
//random colorr
function getRandomColor() {
  	var letters = '0123456789ABCDEF';
 	var color = '#';
  	for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

module.exports.makeRankCard = async (data) => {    
    /*
    * 
    * Remake from Canvacord
    * 
    */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
	const Canvas = global.nodemodule["canvas"];
	const request = global.nodemodule["node-superfetch"];
	const __root = path.resolve(__dirname, "cache");
	const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;

	Canvas.registerFont(__root + "/regular-font.ttf", {
		family: "Manrope",
		weight: "regular",
		style: "normal"
	});
	Canvas.registerFont(__root + "/bold-font.ttf", {
		family: "Manrope",
		weight: "bold",
		style: "normal"
	});
//chỉnh sửa số ảnh rankcard để random
	const pathCustom = path.resolve(__dirname, "cache", "customrank");
	var customDir = fs.readdirSync(pathCustom);
	let random = Math.floor(Math.random() * 30) + 1;
	    var dirImage = __root + "/rankcard" + random + ".png";


	customDir = customDir.map(item => item.replace(/\.png/g, ""));

	for (singleLimit of customDir) {
		var limitRate = false;
		const split = singleLimit.split(/-/g);
		var min = parseInt(split[0]), max = parseInt((split[1]) ? split[1] : min);
	
		for (; min <= max; min++) {
			if (level == min) {
				limitRate = true;
				break;
			}
		}

		if (limitRate == true) {
			dirImage = pathCustom + `/${singleLimit}.png`;
			break;
		}
	}

	let rankCard = await Canvas.loadImage(dirImage);
	const pathImg = __root + `/rank_${id}.png`;
	
	var expWidth = (expCurrent * 615) / expNextLevel;
	if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;
	
	let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`);

	avatar = await this.circle(avatar.body);

	const canvas = Canvas.createCanvas(934, 282);
	const ctx = canvas.getContext("2d");

	ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

	ctx.font = `bold 36px Manrope`;
	ctx.fillStyle = getRandomColor();
	ctx.textAlign = "start";
	ctx.fillText(name, 270, 164);
	ctx.font = `36px Manrope`;
	ctx.fillStyle = getRandomColor();
	ctx.textAlign = "center";

	ctx.font = `bold 35px Manrope`;
	ctx.fillStyle = getRandomColor();
	ctx.textAlign = "end";
	ctx.fillText(level, 610 - 55, 82);
	ctx.fillStyle = getRandomColor();
	ctx.fillText("Level:", 610 - 55 - ctx.measureText(level).width - 10, 82);

	ctx.font = `bold 32px Manrope`;
	ctx.fillStyle = getRandomColor();
	ctx.textAlign = "end";
	ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
	ctx.fillStyle = getRandomColor();
	ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

	ctx.font = `bold 26px Manrope`;
	ctx.fillStyle = getRandomColor();
	ctx.textAlign = "start";
	ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
	ctx.fillStyle = getRandomColor();
	ctx.fillText(expCurrent, 710, 164);

	ctx.beginPath();
	ctx.fillStyle = getRandomColor();
	ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
	ctx.fill();
	ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
	ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
	ctx.fill();

	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	return pathImg;
}

module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
	image = await jimp.read(image);
	image.circle();
	return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
	if (level <= 0) return 0;
	return 3 * level * (level - 1);
}

module.exports.getInfo = async (uid, Currencies) => {
	let point = (await Currencies.getData(uid)).exp;
	const level = this.expToLevel(point);
	const expCurrent = point - this.levelToExp(level);
	const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
	return { level, expCurrent, expNextLevel };
}

module.exports.onLoad = async function () {
	const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
	const path = resolve(__dirname, "cache", "customrank");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
//hàm dowload file có sẵn bao gồm font chữ hoặc pang rankcard (có thể thay)
    if (!existsSync(resolve(__dirname, 'cache', 'regular-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/regular-font.ttf", resolve(__dirname, 'cache', 'regular-font.ttf'));
	if (!existsSync(resolve(__dirname, 'cache', 'bold-font.ttf'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/fonts/bold-font.ttf", resolve(__dirname, 'cache', 'bold-font.ttf'));
	if (!existsSync(resolve(__dirname, 'cache', 'rankcard.png'))) await downloadFile("https://raw.githubusercontent.com/catalizcs/storage-data/master/rank/rank_card/rankcard.png", resolve(__dirname, 'cache', 'rankcard.png'));

}

module.exports.run = async function ({ event, api, Currencies, Users }) {
	const fs = global.nodemodule["fs-extra"];
	let dataAll = (await Currencies.getAll(["userID", "exp"]));
	dataAll.sort((a, b) => {
		if (a.exp > b.exp) return -1;
		if (a.exp < b.exp) return 1;
	});

	const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
  const listUserID = event.participantIDs
    var id = listUserID
      exp = [];
      for(const idUser of listUserID) {
      const countMess = await Currencies.getData(event.senderID) || await Currencies.getData(id);
      exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
  }
      exp.sort(function (a, b) { return b.exp - a.exp });
      const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;   const infoUser = exp[rank - 1];
      
		if (rank == 0) return api.sendMessage("Bạn hiện không có trong cơ sở dữ liệu nên không thể thấy thứ hạng của mình, vui lòng thử lại sau 5 giây.", event.threadID, event.messageID);

		const point = await this.getInfo(event.senderID, Currencies);
		let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })

		return api.sendMessage({body: `💟Tên: ${name}\n🏆Top: ${rank} \n💌Tổng tin nhắn: ${infoUser.exp} 🌟`, attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
	}