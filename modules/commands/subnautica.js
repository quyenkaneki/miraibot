module.exports.config = {
    name: "subnautica",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Heo Rừng, mod từ working của D-Jukie", 
    description: "câu cá xuyên hành tinh =))), lấy cảm hứng từ tựa game Subnautica và Subnautica Below Zero",
    commandCategory: "Coins",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 60000
    }
};
module.exports.languages = {
    "vi": {
        "cooldown": "⚡️Bạn đang banh mồm con cá để lấy lại mồi câu trong dạ dày của nó =)) rồi chở đi bán, thời gian chờ đi bán: %1 phút %2 giây."      
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};
//random coins nhận được khi làm việc ít nhất 200
var coinsa = Math.floor(Math.random() * 101) + 500; //random coins khi đi câu ở một cái ao nào đó
var coinssb = Math.floor(Math.random() * 401) + 800; //random coins khi đi câu ở một con sông bé
var coinssl = Math.floor(Math.random() * 701) + 1100; //random coins khi đi câu ở một con sông to vãi l
var coinsbb = Math.floor(Math.random() * 1001) + 1400; //random coins khi đi câu ở ven bờ biển
var coinssh = Math.floor(Math.random() * 1301) + 1700; //random coins khi đi câu ở biển san hô
var coinsst = Math.floor(Math.random() * 1601) + 2000; //random coins khi đi câu ở biển xanh sâu thẳm
var coins7 = Math.floor(Math.random() * 1901) + 2300; //random coins khi đi câu ở biển xanh sâu thẳm
var coins8 = Math.floor(Math.random() * 2201) + 2600; 
var coins9 = Math.floor(Math.random() * 2501) + 2900; 
var coins10 = Math.floor(Math.random() * 2701) + 3200; 
var coins11 = Math.floor(Math.random() * 3501) + 800; 
var coins12 = Math.floor(Math.random() * 1201) + 4000; 

//random công việc cần làm
var rda = ['một con bladderfish bằng 2 bàn tay của em em múa cho mẹ xem', 'một con Boomerang Fish, vâng, nó to bằng cái boomerang', 'một con Floater to bằng đầu bạn', 'một con Garryfish to bằng đầu bạn', 'một con Gasopod đủ to để đấm chết con m* bạn', 'một con Peeper có thể nổ chết cmn bạn', 'một con Rabbit Ray, ỏ cute chưa kìa, cá đuối thỏ', 'một con Skyray, cá đuối bay như chim, đương nhiên nó to hơn chim bạn... 13 lần?']; //random công việc khi đi câu ở một cái ao nào đó
var fish1 = rda[Math.floor(Math.random() * rda.length)];   

var rdsb = ['một con Reefback Leviathan to bằng 2 cái nhà bạn, to vãi bìu nhưng đéo được giá mấy :(', 'một con Reginard 20cm', 'một con Spadefish nhìn dị vãi lỏ', 'một con Shuttlebug xấu xí như bạn vậy đó :3']; //đi câu ở một con sông bé
var fish2 = rdsb[Math.floor(Math.random() * rdsb.length)]; 

var rdsl = ['một con Eyeye, quả mắt to vãi lỏ', 'một con Hoopfish phát sáng xanh đẹp vãi nồn', 'một con Hoverfish 25cm', 'một con Rabbit Ray nhưng to hơn và cute hơn =))) so với Safe Shallows', 'một con Stalker, nào cẩn thận nó cạp cho mất tay bây giờ']; //random cá khi đi câu ở một con sông to vãi l
var fish3 = rdsl[Math.floor(Math.random() * rdsl.length)]; 

var rdbb = ['một con Biter, như cái tên, nó cắn bạn', 'một vài con Spadefish', 'một vài con Hoopfish', 'dăm ba con Peeper, may quá nó chưa nổ cho banh xác', 'một con Sand Shark hổ báo cáo chồn']; //random đi câu ở ven bờ biển
var fish4 = rdbb[Math.floor(Math.random() * rdbb.length)]; 

var rdsh = ['một vài con Bladderfish', 'một vài con Hoopfish', 'một vài con Eyeye', 'một con Warper với 2 quả vuốt như 2 cái liềm', 'một con Ghost Leviathan trưởng thành max size 107m', 'một vài con Bladderfish', 'một vài con Bladderfish', 'một vài con Bladderfish', 'một vài con Bladderfish', 'một vài con Bladderfish', 'một vài con Bladderfish']; //random cá đi câu ở biển san hô
var fish5 = rdsh[Math.floor(Math.random() * rdsh.length)]; 

var rdst = ['một con lươn điện Ampeel dài 5m có thể giật bạn sun vòi', 'một con Blighter bé như Biter, nó cũng cắn bạn khi ngứa mồm', 'một con Blood Crawler 4 chân y hịt một con cua nhện =))', 'một vài con Spinefish']; //random cá đi câu ở biển xanh sâu thẳm
var fish6 = rdst[Math.floor(Math.random() * rdst.length)];

var rd7 = ['một con Ampeel to hơn 7m', 'một con Boneshark 12m có thể cắn cắn bạn đứt làm đôi', 'một con Jellyray trong suốt', 'một con Mesmer bảy sắc cầu vồng', 'một vài con Spadefish', 'một vài con Peeper']; 
var fish7 = rd7[Math.floor(Math.random() * rd7.length)];

var rd8 = ['một vài con Bladderfish', 'một vài con Eyeye', 'một vài con Hoopfish', 'một vài con Reginald', 'một vài con Eyeye', 'một vài con Hoopfish', 'một vài con Bladderfish', 'một con Crabsquid cao 3m - sự kết hợp hoàn hảo giữa mực và cua =))', 'một con Warper với 2 quả liềm sắc lẹm', 'một vài con Spadefish', 'một vài con Eyeye', 'một con Crabsquid cao 3m - sự kết hợp hoàn hảo giữa mực và cua =))']; 
var fish8 = rd8[Math.floor(Math.random() * rd8.length)];

var rd9 = ['một con Lava Larva đỏ chót', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con Magmarang - biến thể của cá Boomerang', 'một con Red Eyeye - biến thể của Eyeye', 'một vài con Red Eyeye', 'một vài con Lava Larva', 'một con Crimson Ray rực rỡ màu đỏ như lửa cháy và to không kém', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con Sea Dragon Leviathan to bằng cả tòa nhà 20 tầng!!!', 'một con Crimson Ray rực rỡ màu đỏ như lửa cháy và to không kém', 'một con Crimson Ray rực rỡ màu đỏ như lửa cháy và to không kém']; 
var fish9 = rd9[Math.floor(Math.random() * rd9.length)];

var rd10 = ['một vài con Lava Larva', 'một vài con Red Eyeye', 'một con Sea Dragon Leviathan to bằng cả tòa nhà 20 tầng!!!', 'một vài con Lava Larva', 'một con Crimson Ray', 'một vài con Magmarang', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v', 'một con cá sấu dung nham - Lava Lizard, cẩn thận nó cạp cho chết tươi bây giờ :v']; 
var fish10 = rd10[Math.floor(Math.random() * rd10.length)];

var rd11 = ['một con Bleeder y hịt một con đỉa nhưng to bằng bắp tay bạn', 'một con Ghostray trong suốt, và cũng khá rợn tóc gáy', 'một con River Prowler khoảng 5m với khả năng cắn đứt cánh tay bạn', 'một vài con Spinefish', 'một đàn Spinefish', 'một con Mesmer 7 sắc cầu vồng', 'một vài con Spinefish', 'một con Ghostray trong suốt, và cũng khá rợn tóc gáy', 'một con Juvenile Ghost Leviathan dài 67m, đủ to để đâm nát tàu ngầm', 'một con Ghostray trong suốt, và cũng khá rợn tóc gáy', 'một con River Prowler khoảng 5m với khả năng cắn đứt cánh tay bạn', 'một đàn Spinefish']; 
var fish11 = rd11[Math.floor(Math.random() * rd11.length)];

var rd12 = ['một đàn Bladderfish lớn', 'một đàn Boomerang lớn', 'một đàn Eyeye lớn', 'một đàn Holefish lớn', 'một con Reaper Leviathan full size 55m 4 càng có thể nuốt chửng bạn hoặc cắt một con thuyền làm đôi', 'một đàn Hoverfish lớn', 'nhiều con Peeper bùm bùm chát chát', 'một vài con Rabbit Ray', 'một đàn Reginald lớn', 'một vài con Skyray', 'một con Stalker lớn', 'một con Boneshark lớn chà bá', 'một con Sand Shark mập địt như bạn']; 
var fish12 = rd12[Math.floor(Math.random() * rd12.length)];

var rd13 = ['Bạn vẫn chưa thấy con cá nào', 'Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vừa trạm chán một con Grand Demon Leviathan hay còn có cách gọi khác - Gargantuan Leviathan, nó dài trên 1000m với một quả mõm bằng cả một chiếc tàu ngầm!!! Nó quá to bự nên không thể câu','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào','Bạn vẫn chưa thấy con cá nào']; 
var fish13 = rd13[Math.floor(Math.random() * rd13.length)];


var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `🦈Bạn vừa câu ${fish1} \n Bạn kiếm được ${coinsa}$` ;await Currencies.increaseMoney(event.senderID, parseInt(coinsa)); break;             
                case "2": msg = `🦈Bạn vừa câu ${fish2} \nBạn kiếm được ${coinssb}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinssb)); break;
                case "3": msg = `🦈Bạn vừa câu ${fish3} \nBạn bán được ${coinssl}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinssl)); break;
                case "4": msg = `🦈Bạn câu được ${fish4} \n Bạn kiếm được ${coinsbb}$`; await Currencies.increaseMoney(event.senderID, parseInt(coinsbb)); break;
                case "5": msg = `🦈Bạn câu được ${fish5} \n Bạn kiếm được ${coinssh}$` ; await Currencies.increaseMoney(event.senderID, parseInt(coinssh)); break;
                case "6": msg = `🦈Bạn câu được ${fish6} \n Bạn bán được ${coinsst}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coinsst)); break;
                case "7": msg = `🦈Bạn câu được ${fish7} \n Bạn bán được ${coins7}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins7)); break; //thêm case nếu muốn 
                case "8": msg = `🦈Bạn câu được ${fish8} \n Bạn bán được ${coins8}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins8)); break; 
                case "9": msg = `🦈Bạn câu được ${fish9} \n Bạn bán được ${coins9}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins9)); break; 
                case "10": msg = `🦈Bạn câu được ${fish10} \n Bạn bán được ${coins10}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins10)); break; 
                case "11": msg = `🦈Bạn câu được ${fish11} \n Bạn bán được ${coins11}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins11)); break; 
                case "12": msg = `🦈Bạn câu được ${fish12} \n Bạn bán được ${coins12}$ `; await Currencies.increaseMoney(event.senderID, parseInt(coins12)); break; 
                case "13": msg = `${fish13} `; break; 
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️🦈Vui lòng nhập 1 con số", event.threadID, event.messageID);
            if (choose > 13 || choose < 1) return api.sendMessage("⚡️🦈Lựa chọn không nằm trong danh sách.", event.threadID, event.messageID); //thay số case vào số 7
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️🦈Chưa update...") {
                msg = "⚡️🦈Update soon...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("🐠👽CÂU CÁ TRÊN 4546B👽🐠" +
                "\n\n1.Safe Shallows - Biển Cạn An Toàn"+
                "\n2. Sparse Reef - San Hô Thưa Thớt" +
                "\n3. Kelp Forest - Rừng Tảo Bẹ" +
                "\n4. Grassy Plateaus" +
                "\n5. Grand Reef - Rặng San Hô Lớn" +
                "\n6. Blood Kelp Zone - Vùng Tảo Biển Máu" +
                "\n7. Mushroom Forest - Rừng Nấm" +
                "\n8. Deep Grand Reef - Rặng San Hô Sâu Thẳm" +
                "\n9. Inactive Lava Zone - Vùng Núi Lửa" +
                "\n10. Lava Lakes - Hồ Lava" +
                "\n11. Lost River" +
                "\n12. Crash Zone" +
                "\n13. Khám phá Crater Edge - The Void" +
                "\n==Sẽ còn update thêm vùng và cá=="+
                "\n\n⚡🐠Hãy reply tin nhắn và chọn theo số🐠" +
                "\n=== Còn thở còn câu ==="//thêm hiển thị case tại đây ||  \n[number]. [Ngành nghề]" +
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}
