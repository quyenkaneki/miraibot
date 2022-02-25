module.exports.config = {
    name: "mute",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "D-Jukie",
    description: "Cấm bậc 2 đối với người dùng",
    commandCategory: "admin",
    usages: "ban/unban/list",
    cooldowns: 0
};

module.exports.onLoad = function () {
    const {
        writeFileSync,
        existsSync
    } = require('fs-extra');
    const {
        resolve
    } = require("path");
    const path = resolve(__dirname, 'cache', 'banned.json');
    if (!existsSync(path)) {
        const obj = []
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else return
}

module.exports.run = async ({
    api,
    event,
    args,
    Users
}) => {
    const permission = ["100077180438067"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
    const pathh = require('path');
    const fs = require('fs');
    const banUser = require('./cache/banned.json');
    const path = pathh.join(__dirname, 'cache', 'banned.json');
    const moment = require("moment-timezone");
    const timeFormat = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss");
    switch (args[0]) {
    case 'ban':
    case 'banned':
    case '-b': {
        if (event.type == "message_reply") {
            uid = event.messageReply.senderID
            if (!uid) return api.sendMessage('Vui lòng tag/reply hoặc nhập ID user cần cấm!!', event.threadID, event.messageID);
            if (banUser.some(i => i.id == uid) == true) return api.sendMessage('Người dùng này đã bị ban từ trước', event.threadID, event.messageID);
            var id = uid
            var name = (await Users.getData(uid)).name
            var banned = true
            var reason = (args.slice(1, args.length)).join(" ") || null;
            banUser.push({
                name,
                id,
                banned,
                reason,
                time: timeFormat
            });
            fs.writeFileSync(path, JSON.stringify(banUser, null, 2), 'utf-8');
            return api.sendMessage('Đã cấm thành công user ' + name + '\nLí do: ' + reason, event.threadID, event.messageID);
        } else if (args.join().indexOf('@') !== -1) {
            var msg = []
            var fail = []
            for (var i = 0; i < Object.keys(event.mentions).length; i++) {
                var id = Object.keys(event.mentions)[i]
                if (banUser.some(i => i.id == id) == true) continue;
                var name = (await Users.getData(id)).name
                var banned = true
                var reason = args.join(" ").split("-").pop() || null;
                if (args.join(" ").indexOf('-') == -1) reason = null
                banUser.push({
                    name,
                    id,
                    banned,
                    reason,
                    time: timeFormat
                });
                fs.writeFileSync(path, JSON.stringify(banUser, null, 2), 'utf-8');
                msg += '[ BAN ] - ' + name + '\n- Lí do: ' + reason + '\n'
            }
            return api.sendMessage(msg, event.threadID, event.messageID);
        } else {
            uid = args[0]
            if (!uid) return api.sendMessage('Vui lòng tag/reply hoặc nhập ID user cần cấm!!', event.threadID, event.messageID);
            if (banUser.some(i => i.id == uid) == true) return api.sendMessage('Người dùng này đã bị ban từ trước', event.threadID, event.messageID);
            var id = uid
            var name = (await Users.getData(uid)).name
            var banned = true
            var reason = (args.slice(1, args.length)).join(" ") || null;
            banUser.push({
                name,
                id,
                banned,
                reason,
                time: timeFormat
            });
            fs.writeFileSync(path, JSON.stringify(banUser, null, 2), 'utf-8');
            return api.sendMessage('Đã cấm thành công user ' + name + '\nLí do: ' + reason, event.threadID, event.messageID);
            break;
        }
    }
    case 'unban':
    case 'uban':
    case '-ub': {
        if (event.type == "message_reply") {
            uid = event.messageReply.senderID
        } else if (args.join().indexOf('@') !== -1) {
            uid = Object.keys(event.mentions)
        } else {
            uid = args[0]
        }
        if (!uid) return api.sendMessage('Vui lòng tag/reply hoặc nhập ID user cần bỏ cấm!!', event.threadID, event.messageID);
        if (banUser.some(i => i.id == uid) == false) return api.sendMessage('Người dùng này chưa bị ban', event.threadID, event.messageID);
        const index = banUser.findIndex(item => item.id == uid);
        banUser.splice(index, 1);
        fs.writeFileSync(path, JSON.stringify(banUser, null, 2), 'utf-8');
        return api.sendMessage('Đã bỏ cấm thành công user', event.threadID, event.messageID);
        break;
    }
    case 'list':
    case '-l': {
        if (banUser.length == 0) return api.sendMessage('Không tìm thấy người dùng nào bị ban!!', event.threadID, event.messageID)
        var nameUser = [],
            idUser = [],
            msg = [],
            i = 1;
        for (var index of banUser) {
            nameUser.push(index.name)
            idUser.push(index.id)
            msg += `${i++} ` + index.name + '-' + index.id + '\n- Lí do: ' + index.reason + '\n'
        }
        return api.sendMessage('LIST BAN\n' + msg + '\nReply tin nhắn này với nội dung: unban 1 2 3 để unban user tương ứng!', event.threadID, (error, info) =>
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                nameUser,
                idUser
            }),
            event.messageID);
        break;
    }
    default: {
        return api.sendMessage('Vui lòng nhập các tag: ban/unban/list', event.threadID, event.messageID)
    }
    }
}
module.exports.handleReply = async function ({
    api,
    event,
    args,
    Threads,
    handleReply
}) {
    const {
        threadID,
        messageID
    } = event;
    const banUser = require('./cache/banned.json');
    const pathh = require('path');
    const fs = require('fs');
    const path = pathh.join(__dirname, 'cache', 'banned.json');
    if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;
    var arrnum = event.body.split(" ");
    var msg = "";
    var nums = arrnum.map(n => parseInt(n));
    nums.shift();
    for (let num of nums) {
        var user = handleReply.idUser[num - 1];
        var name = handleReply.nameUser[num - 1];
        const index = banUser.findIndex(item => item.id == user);
        banUser.splice(index, 1);
        fs.writeFileSync(path, JSON.stringify(banUser, null, 2), 'utf-8');
        msg += name + '-' + user + '\n'
    }
    api.sendMessage(`Bạn đã được admin gỡ ban!!!`, user,
        () =>
        api.sendMessage(`===UNBAN===\n\n${msg}`, threadID,
            () =>
            api.unsendMessage(handleReply.messageID)));
}