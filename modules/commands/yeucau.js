module.exports.config = {
    name: "yeucau",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Yêu cầu hỗ trợ/đóng góp ý kiến | [gỡ ban] kèm uid",
    commandCategory: "box",
    usages: "[add/list/remove] [your input]",
    cooldowns: 5
};

module.exports.onLoad = function() {
    const fs = require("fs-extra");

    if (!fs.existsSync(__dirname + "/cache/yeucauHotro.json")) {
        const yeucauHotro = [];
        fs.writeFileSync(__dirname + "/cache/yeucauHotro.json", JSON.stringify(yeucauHotro));
    }
}

module.exports.run = function({ api, event, args, permssion }) {
    const fs = require("fs-extra");
    const content = args.slice(1, args.length);
    const dirFile = __dirname + "/cache/yeucauHotro.json";

    var getList = fs.readFileSync(dirFile);
    var getData = JSON.parse(getList);

    switch (args[0]) {
        case "add":
            {
                const yeucau = `[ ${event.senderID} ] ${content.join(" ")}`
                getData.push(yeucau);
                fs.writeFileSync(dirFile, JSON.stringify(getData));
                return api.sendMessage(`Bạn đã thêm yêu cầu mới thành công`, event.threadID, event.messageID);
            }
        case "list":
        case "all":
            {
                if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có yêu cầu nào để hiển thị!`, event.threadID, event.messageID);
                var workList = "";
                getData.map(item => workList += `\n- ${item}`);
                return api.sendMessage(`Sau đây là toàn bộ yêu cầu hỗ trợ: ${workList}`, event.threadID, event.messageID);
            }

        case "delete":
        case "remove":
        case "del":
            {
                if (permssion !== 2) return api.sendMessage("Bạn không đủ quyền hạn để có thể sử dụng delete!", event.threadID, event.messageID);
                if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có yêu cầu nào để có thể xóa!`, event.threadID, event.messageID);
                if (content.length == 0) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
                if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
                getData.splice((parseInt(content) - 1), 1);
                fs.writeFileSync(dirFile, JSON.stringify(getData));
                return api.sendMessage(`Đã xóa thành công mục có id là: ${content}`, event.threadID, event.messageID);
            }
        default:
            return api.sendMessage(`Yêu cầu công việc/đóng góp ý kiến | [gỡ ban] kèm uid\n\nSai cú pháp!\nSử dụng: _yeucau add <text>, _yeucau list, _yeucau delete`, event.threadID, event.messageID);
            break;
    }
}