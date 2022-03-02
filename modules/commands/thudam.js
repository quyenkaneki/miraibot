const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "thudam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Hungcatmoi-api mod by Kaneki",
  description: "Thudam người bạn tag",
  commandCategory: "hành động",
  usages: "thudam [tag người bạn cần thủ dâm]",
  cooldowns: 5,
};

module.exports.run = function({
  api,
  event,
  args
}) {
  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  if (!args.join(" ")) return out("Bạn chưa nhập tin nhắn");
  else
  return request('https://apivippro.kudasaikaneki.repl.co/thudam/?apikey=myvoquyen', (err, response, body) => {
    let picData = JSON.parse(body);
    var mention = Object.keys(event.mentions)[0];
    let getURL = picData.url;
    let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
    let tag = event.mentions[mention].replace("@", "");
    let callback = function() {
      api.sendMessage({
        body: tag + ", Nứng quá à",
        mentions: [{
          tag: tag,
          id: Object.keys(event.mentions)[0]
        }],
        attachment: fs.createReadStream(__dirname + `/cache/anime.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anime.${ext}`), event.messageID);
    };
    request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/anime.${ext}`)).on("close", callback);
  });
}