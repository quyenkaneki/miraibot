module.exports.config = {
  name: "fishing",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "biết rồi còn nhìn làm gì",
  description: "Câu cá ở các vùng trong subnautica",
  commandCategory: "Dành cho người dùng",
  usages: "/subnautica menu",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
  var cauca = Math.floor(Math.random() * 5201) + 4000;
  var dohiem = Math.floor(Math.random() * 100) + 20;
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(`🐻──────SUBNAUTICA──────🐻\n[💵] Thể loại : Trò chơi câu cá kiếm tiền \n[🎀] Cách dùng : /subnautica + các tag bên dưới \n[⚜️SH] Menu\n[⚜️SH] Shop`, event.threadID, event.messageID);

     if (args[0] == "menu") {
var money = (await Currencies.getData(event.senderID)).money
   if (money >= 1000) {
  axios.get('https://apixin-1.han666.repl.co/subnautica').then(res => {
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n1. 🐳Safe shallows - Biển cạn an toàn💴\n2. 🐙Sparse Reef - San Hô Thưa Thớt💴\n3. 🦑 Kelp Forest - Rừng Tảo Bẹ💴\n4.🦐 Grassy Plateaus💴\n5. 🦞 Grand Reef - Rặng San Hô Lớn💴\n6. 🦀 Blood Kelp Zone - Vùng Tảo Biển Máu💴   \n7. 🐡 Mushroom Forest - Rừng Nấm💴\n8.🐙 Deep Grand Reef - Rặng San Hô Sâu Thẳm💴   \n9. 🐳 Inactive Lava Zone - Vùng Núi Lửa💴\n10. 🦞 Lava Lakes - Hồ Lava💴\n11. 🦑 Lost River💴\n12. 🦀 Crash Zone💴\n Nhấn /subnautica + STT vùng mà bạn muốn câu (vd : /subnautica 1 )`,

            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);
}
 if (args[0] == "1") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n1. 🐳Safe shallows - Biển cạn an toàn💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$\n 🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "2") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n2. 🐙Sparse Reef - San Hô Thưa Thớt��\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$\n🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "3") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n3. 🦑 Kelp Forest - Rừng Tảo Bẹ💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$\n 🍁Độ hiếm : ${dohiem}% `,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "4") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n4.🦐 Grassy Plateaus💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n 🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "5") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n5. 🦞 Grand Reef - Rặng San Hô Lớn\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
} 
 if (args[0] == "6") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n6. 🦀 Blood Kelp Zone - Vùng Tảo Biển Máu💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "7") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
   \n7. 🐡 Mushroom Forest - Rừng Nấm💴\n 🎀Bạn đã câu được con cá có trị giá là : ${cauca}$\n 🍁Độ hiếm : ${dohiem}% `,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "8") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n8.🐙 Deep Grand Reef - Rặng San Hô Sâu Thẳm💴 \n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n 🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
} 
 if (args[0] == "9") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
  \n9. 🐳 Inactive Lava Zone - Vùng Núi Lửa💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "10") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n────��────[🎣FISHING🎣]─────────────
\n10. 🦞 Lava Lakes - Hồ Lava💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n 🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "11") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n11. 🦑 Lost River💴\n🎀Bạn đã câu được con cá có trị giá là : ${cauca}$\n🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "12") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://subnautica.han666.repl.co/').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `              
\n─────────[🎣FISHING🎣]─────────────
\n12. 🦀 Crash Zone💴\n🎀 Bạn đã câu được con cá có trị giá là : ${cauca}$ \n 🍁Độ hiếm : ${dohiem}%`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "shop-1") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau1').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Amateur của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 40% \n[⚜️]Bạn bị trừ 2000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 2000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}
 if (args[0] == "shop-2") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau2 ').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Feline của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 50% \n [⚜️]Bạn bị trừ 5000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 5000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}
 if (args[0] == "shop") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `\n[⚜️] FISHING ROD [🎀]\n[💵]Hãy lựa chọn cần câu cùa b��n nhấn /subnautica shop + STT cần câu (ví dụ /subnautica shop-1)`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("Bạn cần 1000 đô để có thể câu cá",event.threadID,event.messageID);  
}
 if (args[0] == "shop-3") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 8000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau3').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Duck của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 70% \n [⚜️]Bạn bị trừ 8000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 8000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}
 if (args[0] == "shop-4") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 9000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau4').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Wooden của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 75% \n [⚜️]Bạn bị trừ 9000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 9000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}
 if (args[0] == "shop-5") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 10000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau5').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Pocket của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 80% \n [⚜️]Bạn bị trừ 10000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 10000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}
 if (args[0] == "shop-6") {
var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000000) {
const res = await  axios.get('https://apixin-1.han666.repl.co/cancau6').then(res => {
   var data = res.data;
   var ketqua = data.ketqua
  var image = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `[⚜️] Thành Công [🎀]\n[⚜️] Cần câu Pocket của bạn đây.\n[⚜️]Tỉ lệ câu chúng cá hiếm là : 90% \n [⚜️]Bạn bị trừ 1000000 đô khi mua cần câu này.`,
            attachment: fs.createReadStream(__dirname + `/cache/sub.png`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sub.png`), event.messageID);
        };
        request(image).pipe(fs.createWriteStream(__dirname + `/cache/sub.png`)).on("close", callback);
        Currencies.increaseMoney(event.senderID, cauca)
      })
  } else return api.sendMessage("[⚜️] Thất bại [🎀]\n Bạn cần 1000000 đô để có thể mua cần câu này",event.threadID,event.messageID);  
}  
}
