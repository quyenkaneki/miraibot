module.exports.config = {
	name: "img",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem ảnh réply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("🎭Danh sách các ảnh hiện có\n\n1. Gái\n2. Trai \n3. Hentai\n4. Naughty \n5. Kana\n6. Cosplay\n7. Anime\n8. Mông\n9. Meme\n10. Gái sexy\n11. Kanna\n12. Rem\n13. Violet\n14. Rem\n15. Mirai\n16. Anime\n17 .Chitanda\n18. Jimmy\n19. Shiba\n20. Umaru\n 21. Wibu\n22. Loli\n23. Mona\n24. Hutao\n25 Ganyu\n26. Yoimiya\n27. Yae\n28. Yunchin\n29. Baal\n30. Loli\n31. Twitter\n32. Lgbt\n33. Jack\n34. Instragram\n35. Liên Quân\n36. Slime\n37. Liên Minh\n38. Gay\n39. Gái sexy\n40. Gái\nReply❤️số🧡thứ💛tự💚để💙xem💜ảnh❤️nha\n\n🛸ㅤㅤㅤ🌏　°　　🌖　•　　.°•　　　🚀  \n✯ ㅤ★ㅤ　*　ㅤ　°　ㅤ　🛰 ㅤ　° ㅤ🪐.\n　ㅤ　•ㅤ　°ㅤ ★ㅤ　•ㅤ ☄", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[Thành Công] : Đây là ảnh của bạn !!",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://api-kanekidz.herokuapp.com/gaivuto";
        else if ("2" == a.body)
         var   h = "https://apikanekiflop.tk/trai";
        else if ("3" == a.body)
         var   h = "https://api-kanekidz.herokuapp.com/hentai";
        else if ("4" == a.body)
          var  h = "https://apitaoa-1.chinhle4447.repl.co/v1/nauthy";
        else if ("5" == a.body)
          var  h = "https://apichitanda-1.khanh-huyenhuy3.repl.co/kana.php";
        else if ("6" == a.body)
          var  h = "https://api.vinhbeat.ga/cosplay.php";
        else if ("7" == a.body)
          var  h = "https://uptime.ocvat2810.repl.co/";
        else if ("8" == a.body)
          var  h = "https://api-kanekidz.herokuapp.com/gaiditbu";
        else if ("9" == a.body)
         var   h = "https://api.ryder447.repl.co/meme";
        else if ("10" == a.body)
         var  h = "https://api.ryder447.repl.co/gaisexy";
        else if ("11" == a.body)
          var  h = "https://apikanna.khoahoang3.repl.co";
        else if ("12" == a.body)
          var  h = "https://api.nekos.dev/api/v3/images/nsfw/img/smallboobs_lewd/";
        else if ("13" == a.body)
          var  h = "https://apiviolet.khoahoang3.repl.co";
        else if ("14" == a.body)
         var   h = "https://apirem.khoahoang3.repl.co";
        else if ("15" == a.body)
         var   h = "https://mirai.ocvat2810.repl.co";
        else if ("16" == a.body)
          var  h = "https://anime.ocvat2810.repl.co/";
        else if ("17" == a.body)
           var h = "https://apichitanda.ocvat2810.repl.co";
        else if ("18" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("19" == a.body)
           var h = "https://shiba.ocvat2810.repl.co";
        else if ("20" == a.body)
          var  h = "https://apiumaru.khoahoang3.repl.co";
        else if ("21" == a.body)
          var  h = "https://wibu.ocvat2810.repl.co";
      else if ("22" == a.body)
          var  h = "https://jrt-api.j-jrt-official.repl.co/loli";
      else if ("23" == a.body)
          var  h = "https://mona.feedheavens.repl.co";
      else if ("24" == a.body)
          var  h = "https://hutao.feedheavens.repl.co";
      else if ("25" == a.body)
          var  h = "https://ganyu.feedheavens.repl.co";
      else if ("26" == a.body)
           var h = "https://yoimiya.feedheavens.repl.co";
      else if ("27" == a.body)
         var   h = "https://Guuji-Yae.feedheavens.repl.co";
      else if ("28" == a.body)
           var h = "https://Yunjin.feedheavens.repl.co";
      else if ("29" == a.body)
           var h = "https://Raiden-Shogun.feedheavens.repl.co";
      else if ("30" == a.body)
         var   h = "https://jrt-api.j-jrt-official.repl.co/loli";
      else if ("31" == a.body)
         var   h = "https://jrt-api.j-jrt-official.repl.co/twitter";
      else if ("32" == a.body)
          var  h = "https://jrt-api.j-jrt-official.repl.co/lgbt";
      else if ("33" == a.body)
        var    h = "https://jrt-api.j-jrt-official.repl.co/jack";
      else if ("34" == a.body)
         var   h = "https://jrt-api.j-jrt-official.repl.co/instagram";
      else if ("35" == a.body)
         var   h = "https://lienquan.sangnguyn10.repl.co/";
      else if ("36" == a.body)
         var   h = "https://slime.sangnguyn10.repl.co";
      else if ("37" == a.body)
      var      h = "https://lienminh.sangnguyn10.repl.co";
      else if ("38" == a.body)
         var   h = "https://gay.sangnguyn10.repl.co";
      else if ("39" == a.body)
          var  h = "https://api-kanekidz.herokuapp.com/gaisexy";
      else if ("40" == a.body)
          var  h = "https://api.vinhbeat.ga/gai.php";
        return { p, h };
    }
};
