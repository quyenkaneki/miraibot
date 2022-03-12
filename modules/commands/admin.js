module.exports.config = {
	name: "admin",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Bật tắt chế độ chỉ qtv dùng lệnh",
	commandCategory: "Hệ thống Admin-bot",
	usages: "Bật tắt chế độ chỉ admin và qtv dùng lệnh",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {
    "vi": {
        "listAdmin": `[⚜️]•[⚜️] ADMIN [⚜️]•[🔱]\n\n%1`,
        "listNHT": `[⚜️]•[⚜️] Người Hỗ Trợ Bot [⚜️]•[⚜️] \n\n%1`,
        "notHavePermssion": '[⚜️] Bạn không đủ quyền hạn để có thể sử dụng chức năng "%1"',
        "addedNewAdmin": '[⚜️] Đã thêm %1 người dùng trở thành admin-bot:\n\n%2',
        "removedAdmin": '[⚜️] Đã gỡ bỏ %1 người điều hành bot:\n\n%2',
        "adminsupport": '[⚜️] Đã thêm %1 người dùng trở thành người hỗ trợ  người điều hành bot:\n\n%2'
    },
    "en": {
        "listAdmin": '[Admin] Admin list: \n\n%1',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 Admin :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 Admin:\n\n%2'
    }
}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    if (args.length == 0) return api.sendMessage(`Bạn có thể dùng\n» admin add => thêm người dùng làm admin\n» admin list => xem danh sách các admin \n» admin remove => gỡ bỏ admin\n» admin boxonly => bật tắt chế độ chỉ quản trị viên dùng bot\n» admin only => bật tắt chế độ chỉ admin mới dùng được bot\n» HDSD: ${global.config.PREFIX} admin lệnh bạn cần dùng
`, event.threadID, event.messageID);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { NHT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);
    switch (args[0]) {
        case "list": {
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`[⚜️] ${name}\n[⚜️] Link: fb.me/${idAdmin}`);
                }
            }
          listNHT = NHT || config.NHT ||  [];
            var msg1 = [];
            for (const idNHT of listNHT) {
                if (parseInt(idNHT)) {
                  const name1 = (await Users.getData(idNHT)).name
                    msg1.push(`[⚜️] ${name1}\n[🔱] Link: fb.me/${idNHT}`);
                }
            }
return api.sendMessage(`[⚜️] ADMINBOT [⚜️]\n»============«\n\n${msg.join("\n")}\n\n————————🔱————————\n\n[⚜️] SUPPORTBOT [⚜️]\n»============«\n\n${msg1.join("\n\n")}`, event.threadID, event.messageID)
        }
        case "add": { 
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[⚜️] ${id} [⚜️] → ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[⚜️] ADMIN [⚜️]→ ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
case "sp": {
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    NHT.push(id);
                    config.NHT.push(id);
                    listAdd.push(`[⚜️] ${id} [⚜️] → ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("adminsupport", 1, `[⚜️] ADMIN SP [⚜️]→ ${name}`), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                NHT.push(content[0]);
                config.NHT.push(content[0]);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("adminsupport", 1, `[⚜️] ADMIN SP [⚜️] → ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        case "remove":
        case "rm":
        case "delete": {
            if(event.type == "message_reply") { content[0] = event.messageReply.senderID }
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[⚜️] ${id} [⚜️] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = (await Users.getData(content[0])).name
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[⚜️] ${content[0]} [⚜️] → ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }
        case 'boxonly': {
          if (permssion != 1) return api.sendMessage("[⚜️] Xin lỗi! lệnh này chỉ quản trị viên box mới dùng được", threadID, messageID);
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;   
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[⚜️] Tắt thành công chế độ Quản trị viên tất cả mọi người đều có thể sử dụng bot", threadID, messageID);
        } else {
            adminbox[threadID] = true;
            api.sendMessage("[⚜️] Bật thành công chế chỉ Quản trị viên nhóm mới có thể sử dụng bot", threadID, messageID);
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
        break;
    }
    case 'only':
        case '-o': {
            //---> CODE ADMIN ONLY<---//
            if (permssion != 3) return api.sendMessage("[⚜️] Xin lỗi! lệnh này chỉ admin or admin support mới dùng được", threadID, messageID);
            if (config.adminOnly == false) {
                config.adminOnly = true;
                api.sendMessage(`[⚜️] Bật thành công chỉ Admin mới dùng được bot`, threadID, messageID);
            } else {
                config.adminOnly = false;
                api.sendMessage(`[⚜️] Tắt thành công chỉ Admin mới dùng được bot`, threadID, messageID);
            }
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                break;
              }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}