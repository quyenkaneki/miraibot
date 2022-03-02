/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "aio",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Tải được tất cả video nếu nguồn được hỗ trợ (xem chi tiết tại meew .info/site/docs#aio)",
    commandCategory: "tiện ích",
    usages: "[url]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": ""
    },
    envConfig: {
        APIKEY: 'Meew_AjEYDnwNoNcfzE6LyYTsdXgDuBXWpQ'
    }
};

module.exports.onLoad = async function () {
    console.log('\n\n=== Tạo Apikey mới tại meew.info ===\n');
    console.log('=== Tạo Apikey mới tại meew.info ===\n');
    console.log('=== Tạo Apikey mới tại meew.info ===\n\n');
};

module.exports.run = async function ({ event, api, args }) {
    const axios = global.nodemodule["axios"];
    const { APIKEY } = global.configModule.aio;
    const { threadID, senderID, messageID } = event;
    const out = (msg) => api.sendMessage(msg, threadID, event.messageID);
    if (args.length == 0) return out("Bạn chưa nhập url");
    const url = args[0];
    const { data } = await axios.get('https://meewmeew.info/aio?url=' + encodeURIComponent(url) + '&apikey=' + APIKEY);
    if (data.success == true) {
        var sendData = {};
        var title = data.data.title;
        sendData.body = title;
        let num = 0;
        for await (let i of data.data.medias) {
            num += 1;
            sendData.body += '\n\n' + num + '.\n- Quality: ' + i.quality + '\n- Size: ' + i.formattedSize + (i.formattedSize.split('.')[0] >= 25 && i.formattedSize.split(' ')[1] != 'KB' ? ' (too large)' : '') + '\n- Ext: ' + i.extension;
        }
        sendData.body += '\n\nReply số tương ứng để tải video';
        return api.sendMessage(sendData, threadID, (_, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: senderID, medias: data.data.medias }), messageID);
    } else return out(data.error);
};

module.exports.handleReply = async function ({ event, api, handleReply }) {
    const { threadID, messageID } = event;
    const { downloadFile } = global.utils;
    const { resolve } = global.nodemodule["path"];
    const { createReadStream, unlinkSync, statSync, existsSync } = global.nodemodule["fs-extra"];
    const out = (msg) => api.sendMessage(msg, threadID, messageID);
    var sendData = {};
    if (handleReply.medias[event.body - 1] && !isNaN(event.body)) {
        var media = handleReply.medias[event.body - 1];
        var url = media.url;
        var size = media.formattedSize;
        var ext = media.extension;
        var quality = media.quality;
        var filename = `${handleReply.author}_${handleReply.messageID}_${event.body}.${ext}`;
        var path = resolve(__dirname, 'cache', filename);
        await downloadFile(url, path);
        if (existsSync(path)) {
            if (statSync(path).size < 25000000) {
                sendData.attachment = createReadStream(path);
                sendData.body = `Size: ${size}`;
                sendData.body += `\nQuality: ${quality}`;
                return api.sendMessage(sendData, threadID, () => unlinkSync(path), messageID);
            } else {
                return out('File quá lớn');
            }
        }
    } else if (event.body.startsWith('url')) {
        var id = event.body.split(' ')[1] -1;
        return out(handleReply.medias[id].url);
    } else {
        return out('Không tồn tại video này.')
    }
}