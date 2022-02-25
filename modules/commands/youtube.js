module.exports.config = {
    name: "youtube",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HungCho(fix lại by HĐGN)",
    description: "",
    commandCategory: "media",
    usages: "youtube + link video + link audio",
    cooldowns: 1,
    dependencies: {
        "request": "",
         "fs": ""
  },
    envConfig: {
        "TENOR": "73YIAOY3ACT1"
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
    var fs = global.nodemodule["fs-extra"];
    var request = global.nodemodule["request"];
    var { threadID, messageID } = event
     if (args.length == 0){ return api.sendMessage(`/Bạn có thể sử dụng:\n /youtube audio [link youtube]=> nó sẽ tải âm thanh của link đó !\n\n/youtube video [link youtube]=> nó sẽ tải video của link đó !\n\n/youtubes [em có nghe]=> nó sẽ gr 3 kết quả có liên quan vs từ khoá\n\nGiới hạn độ dài cho phép là 8 phút.`, event.threadID, event.messageID);
  };
    
    if (args[0] == "audio") {
    const ytdl = global.nodemodule["ytdl-core"];
  const content = args[1];
  let {senderID, threadID, messageID} = event;
  return ytdl.getInfo(content).then(res => {
    if (res.videoDetails.lengthSeconds > 500) return api.sendMessage("Quá độ dài, độ dài cho phép tối đa là 8 phút !", threadID, messageID);
    else {
      let id = res.videoDetails.videoId;
      ytdl(content, { filter: format => format.itag == '140' }).pipe(fs.createWriteStream(__dirname + `/src/${id}.m4a`)).on('close', () => {
        if (fs.statSync(__dirname + `/src/${id}.m4a`).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', threadID, messageID);
        else api.sendMessage({ attachment: fs.createReadStream(__dirname + `/src/${id}.m4a`) }, threadID, () => fs.unlinkSync(__dirname + `/src/${id}.m4a`), messageID);
      });
    }
  })}
  if (args[0] == "video") { 
    const contentt = args[1];
    const ytdl = global.nodemodule["ytdl-core"];
return ytdl.getInfo(contentt).then(res => {
      
        if (res.videoDetails.lengthSeconds > 600) return api.sendMessage("Video quá lớn", event.threadID, event.messageID);
        else {
          let id = res.videoDetails.videoId;
          ytdl(contentt).pipe(fs.createWriteStream(__dirname + `/src/${id}.mp4`)).on('close', () => {
           
            if (fs.statSync(__dirname + `/src/${id}.mp4`).size > 26214400) return api.sendMessage('Không thể gửi file vì dung lượng lớn hơn 25MB.', event.threadID, event.messageID);
            else api.sendMessage({ attachment: fs.createReadStream(__dirname + `/src/${id}.mp4`) }, event.threadID, () => fs.unlinkSync(__dirname + `/src/${id}.mp4`), event.messageID);
            
          });
        }
      })}}
