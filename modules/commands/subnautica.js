module.exports.config = {
  name: "subnautica",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "ARAXY",
  description: "Nó Vẫn Là Câu Cá Nhưng Remake Lại ?",
  commandCategory: "Game",
  usages: "",
  cooldowns: 0,
  envConfig: {
    cooldownTime: 1200000
  }
};
module.exports.onLoad = async function () {
      console.log("ARAXY");
    return;
}
module.exports.run = async function({ api, args, event, Users, permssion, Currencies }) {
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const { threadID, messageID, senderID } = event;
  const cooldown = global.configModule[this.config.name].cooldownTime;
  let data = (await Currencies.getData(senderID)).data || {};
  if (typeof data !== "undefined" && cooldown - (Date.now() - data.subnauticaTime) > 0) {
    var time = cooldown - (Date.now() - data.subnauticaTime),
      minutes = Math.floor(time / 60000),
      seconds = ((time % 60000) / 1000).toFixed(0);

    return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID, event.messageID);
  }
  else {
    if (!args[0]) {
      const res = await axios.get(`https://araxy.duongduong216.repl.co/?uid=${senderID}`)
      if (`${res.data.data}` == "false") {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      } else {
        return api.sendMessage(`${res.data.msg}[ Reply ]`, threadID, (error, info) => {
          global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
          })
        })
      }
    }
      else {
        return api.sendMessage(`${res.data.msg}`, threadID, messageID)
      }
    }
  }
module.exports.handleReply = async function({
  args, event, Users, api, handleReply, Currencies
}) {
  const { threadID, messageID, senderID } = event;
  const axios = require("axios")
  const fs = require('fs-extra');
  const request = require('request')
  const dataMoney = await Currencies.getData(senderID);
  const moneyUser = dataMoney.money;
  const lmao = (await Users.getData(senderID)).name
  var { author } = handleReply;
  if (event.senderID != author) return api.sendMessage("[ ARAXY ] - CÚT", event.threadID, event.messageID);
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "1": {
          const res = await axios.get(`https://araxy.duongduong216.repl.co/listitem?type=C%E1%BA%A7n%20C%C3%A2u`)
          return api.sendMessage(`[ ARAXY ]\n=========================\n${res.data.msg}[ Có Tổng ${res.data.count} item ]\n [ REPLY ] - Theo STT Để Mua Cần Câu`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "araxy_buy",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
          case "2": {
          const res = await axios.get(`https://araxy.duongduong216.repl.co/listitem?type=Th%E1%BB%A9c%20%C4%82n`)
          return api.sendMessage(`[ ARAXY ]\n=========================\n${res.data.msg}[ Có Tổng ${res.data.count} item ]\n [ REPLY ] - Theo STT Để Mua Cần Câu`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "araxy_buy_thucan",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
        case "3": {
          api.unsendMessage(handleReply.messageID);
          const res = await axios.get(`https://araxy.duongduong216.repl.co/cauca?senderID=${event.senderID}`)
          return api.sendMessage(`${res.data.msg}`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "araxy_fish",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
          case "4": {
          const res = await axios.get(`https://araxy.duongduong216.repl.co/dangky?uid=${senderID}&name=${encodeURI(lmao)}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          }
        } break;
          case "5": {
           api.unsendMessage(handleReply.messageID);
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/listitem?type=3`)
          return api.sendMessage(`[ REPLY ] - Nhập Số Tiền Bạn Cần Mua Mồi`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "thucan",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
          case "6": {
           api.unsendMessage(handleReply.messageID);
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/listitem?type=3`)
          return api.sendMessage(`[ REPLY ] - Nhập Số Tiền Bạn Cần Fix Cần Câu`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "cancau",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
          case "7": {
           api.unsendMessage(handleReply.messageID);
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/listitem?type=3`)
          return api.sendMessage(`[ REPLY ] - Nhập GiftCode`, threadID, (error, info) => {
            global.client.handleReply.push({
              type: "giftcode",
              name: this.config.name,
              author: senderID,
              messageID: info.messageID
            })
          })
        } break;
      }
    }
      break;
    case "araxy_buy": {
      switch (event.body) {
        case event.body: {
          api.unsendMessage(handleReply.messageID);
          if (event.body == '1') {
            var sotien = "100"
          }
          else if (event.body == '2') {
            var sotien = "1000"
          }
          else if (event.body == '3') {
            var sotien = "2000"
          }
          else if (event.body == '4') {
            var sotien = "5000"
          }
          else if (event.body == '5') {
            var sotien = "10000"
          }
          else if (event.body == '6') {
            var sotien = "20000"
          }
          else if (event.body == '7') {
            var sotien = "50000"
          }
          else if (event.body == '8') {
            var sotien = "100000"
          } else if( event.body == '9'){
            var sotien = "200000"
          }
          const res = await axios.get(`https://araxy.duongduong216.repl.co/buy?type=C%E1%BA%A7n&senderID=${senderID}&choose=${event.body}&sotien=${sotien}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            if (moneyUser < sotien) {
              return api.sendMessage(`[ ARAXY ] - WAIT Bạn Đ Đủ Tiền Để Mua Cần Câu Đâu .-.`, threadID, messageID)
            } else {
              await Currencies.decreaseMoney(senderID, parseInt(sotien));

              var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/can.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/can.png"), event.messageID);
              return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/can.png')).on('close', () => callback());
            }
          }
        }
      }
    } break;
      case "araxy_buy_thucan": {
      switch (event.body) {
        case event.body: {
          api.unsendMessage(handleReply.messageID);
          if (event.body == '1') {
            var sotien = "100"
          }
          else if (event.body == '2') {
            var sotien = "1000"
          }
          else if (event.body == '3') {
            var sotien = "2000"
          }
          else if (event.body == '4') {
            var sotien = "5000"
          }
          else if (event.body == '5') {
            var sotien = "10000"
          }
          else if (event.body == '6') {
            var sotien = "20000"
          }
          else if (event.body == '7') {
            var sotien = "50000"
          }
          else if (event.body == '8') {
            var sotien = "100000"
          }
          else if (event.body == '9') {
            var sotien = "200000"
          }
          const res = await axios.get(`https://araxy.duongduong216.repl.co/buy?type=Th%E1%BB%A9c%20%C4%82n&senderID=${senderID}&choose=${event.body}&sotien=${sotien}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            if (moneyUser < sotien) {
              return api.sendMessage(`[ ARAXY ] - WAIT Bạn Đ Đủ Tiền Để Mua Thức Ăn Đâu .-.`, threadID, messageID)
            } else {
              await Currencies.decreaseMoney(senderID, parseInt(sotien));

              var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/can.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/can.png"), event.messageID);
              return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/can.png')).on('close', () => callback());
            }
          }
        }
      }
    } break;
    case "araxy_fish": {
      switch (event.body) {
        case event.body: { 
          
          const res = await axios.get(`https://araxy.duongduong216.repl.co/cauca?senderID=${event.senderID}&choose=${event.body}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            var coin = `${res.data.sotien}`
            await Currencies.increaseMoney(senderID, parseInt(coin));
           var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/ca.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ca.png"), event.messageID);
              return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/ca.png')).on('close', () => callback());
          }
        }
      }
    } break;
      case "thucan": {   
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/buydoan?senderID=${senderID}&sotien=${event.body}&choose=${encodeURI('Đồ Ăn')}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            var coin = `${res.data.sotien}`
            await Currencies.increaseMoney(senderID, parseInt(event.body));
           var callback = () => api.sendMessage({ body: `${res.data.msg}`, attachment: fs.createReadStream(__dirname + "/cache/ca.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ca.png"), event.messageID);
              return request(encodeURI(`${res.data.link}`)).pipe(fs.createWriteStream(__dirname + '/cache/ca.png')).on('close', () => callback());
          }
    } break;
      case "cancau": {   
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/buydoan?senderID=${senderID}&sotien=${event.body}&choose=C%E1%BA%A7n%20C%C3%A2u`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
            var coin = `${res.data.sotien}`
            await Currencies.increaseMoney(senderID, parseInt(event.body));
          return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          }
    } break;
      case "giftcode": {   
          const res = await axios.get(`https://araxy.araxy-ox-qwqbqiws.repl.co/gift?senderID=${senderID}&gift=${encodeURI(event.body)}`)
          if (`${res.data.data}` == "false") {
            return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          } else {
          return api.sendMessage(`${res.data.msg}`, threadID, messageID)
          }
    } break;
  }
}