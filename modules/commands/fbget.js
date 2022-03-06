module.exports.config = {
    name: "fbget",
    version: "1.0.3",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Tải video facebook",
    commandCategory: "phương tiện",
    cooldowns: 5,
    dependencies: {
        "axios": ""
    }
};
module.exports.run = async function({
    api,
    event,
    getText,
    args
}) {
    try {
    const rd = Math.floor(Math.random() * 99999999999)
    const a = require("axios");
    const fs = require("fs-extra");
    const r = await a.get(`http://www.thieutrungkien.xyz/videodl?url=${args[0]}`);
    if (r.data.url.hd == "Không tồn tại chất lượng hd ở video này") {
        api.sendMessage("Vì video này không tồn tại chất lượng HD nên sẽ tự động tải video với chất lượng SD", event.threadID);
        const sd = r.data.url.sd;
        const p = __dirname + `/cache/${rd}.mp4`;
        let k = (await a.get(`${sd}`, {

            responseType: 'arraybuffer'

        })).data;
        fs.writeFileSync(p, Buffer.from(k, "utf-8"));

        return api.sendMessage({
            body: "",
            attachment: fs.createReadStream(p)
        }, event.threadID, (() => fs.unlinkSync(p)), event.messageID);
    }
    else {
    const hd = r.data.url.hd;
    const o = __dirname + `/cache/${rd}.mp4`;
    let h = (await a.get(`${hd}`, {

        responseType: 'arraybuffer'

    })).data;
    fs.writeFileSync(o, Buffer.from(h, "utf-8"));

    return api.sendMessage({
        body: "",
        attachment: fs.createReadStream(o)
    }, event.threadID, (() => fs.unlinkSync(o)), event.messageID);
}
} catch(e) {
    console.log(e)
    return api.sendMessage(`Đã xảy ra lỗi`, event.threadID);
}
}
