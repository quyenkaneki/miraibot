module.exports.config = {
  name: "ảnh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Adoins mod by Kaneki",
  description: "xem ảnh hiện có trên bot",
  commandCategory: "Dành cho người dùng",
  usages: "image",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(` 🎭 Danh sách các ảnh hiện có  🎭 \n\n1. ảnh gái \n2. ảnh trai \n3. ảnh mông\n4. ảnh cosplay\n5. ảnh nude\n6. ảnh gái sexy\n7. vú\n8. ảnh hentai\n\nDùng prefix + ảnh  < ảnh bạn cần xem >\n
`, event.threadID, event.messageID);

     if (args[0] == "vú") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/gaivuto').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái vú bự nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
    if (args[0] == "trai") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/trai').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Trai nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "hentai") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/hentai').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Ảnh hen cho bạn đây\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "sexy") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/gaisexy').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "nude") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/nude').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái nude nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "cosplay") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/cosplay').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️ảnh cosplay nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "anime") {
    var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://uptime.ocvat2810.repl.co').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `Anime của bạn đây\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "mông") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/gaiditbu').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái đít bự <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
 if (args[0] == "gái") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://apikanekiflop.tk/gai').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `⚡️Gái nè <3\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
}
}
