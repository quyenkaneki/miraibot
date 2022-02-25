module.exports.config = {
    name: "taixiuv2",
    version: "1.0.2",
    hasPermssion: 0,
    creditss: "datoccho",//ib zalo 0969733109 để nhận ảnh or tự làm
    description: "Chơi tài xỉu",
    commandCategory: "game",
    usages: "[tài/xỉu] or [chẵn/lẻ] + số tiền (>50)",
    cooldowns: 5
};
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const { createReadStream } = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const data = (await Currencies.getData(senderID)).data || {};
    //  var taixiucac = ["tài", "xỉu", "chẵn", "lẻ"];
    //  const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    const res = await axios.get(`http://apikanekiflop.tk/game/taixiu`);const money = (await getData(senderID)).money;var moneyBet = parseInt(args[1]);var thang = moneyBet * 2;const tax = thang * 5 / 100;const tong = thang - tax;
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Không đúng định dạng (tài/xỉu/chẵn/lẻ) hoặc số tiền đặt cược dưới 50 đô', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Số dư của bạn không đủ.', threadID, messageID);
    api.sendMessage({
        body: 'Vui lòng đợi 1s để lắc',
        attachment: createReadStream(__dirname + '/cache/taixiu.mp4')
    }, threadID, (err, info) => {
        if (err) console.log(err);
        setTimeout(() => {
            api.unsendMessage(info.messageID);
            if (res.data.ketqua.slice(0, 3) == args[0]) {
                return api.sendMessage({
                    body: `Nhà cái ra: ${res.data.ketqua} \nBạn chọn: ${args[0]}\nBạn thắng và nhận được ${thang}$\nVà trừ đi thuế 5% của ${thang} là ${tax}\nSau khi trừ thuê số tiền bạn nhận được là ${tong}\nSố tiền trong ví của bạn là: ${money + tong}$`
                }, threadID, () => Currencies.increaseMoney(senderID, tong), messageID);
            } else if (res.data.ketqua.slice(0, 3) != args[0]) {
                return api.sendMessage({
                    body: `\nNhà cái ra: ${res.data.ketqua} \nBạn chọn: ${args[0]}\nBạn thua và bị trừ ${moneyBet}$\nSố tiền trong ví của bạn là: ${money - moneyBet}$`
                }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
            } else {
                return api.sendMessage("Lỗi gòi đéo biết fix đâu", threadID, messageID);
            }
        }, 1000);
    }, messageID);
}
