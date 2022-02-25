module.exports.config = {
	name: "warn",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "NTKhang fix by Jukie",
	description: "⚡️Cảnh cáo thành viên  đủ 3 lần sẽ ban khỏi nhóm (nhớ set qtv cho bot nha)",
	commandCategory: "admin",
	usages: "[key]",
	cooldowns: 1,
	info: [
		{
			key: '[tag] hoặc [reply tin nhắn] "lý do"',
			prompt: 'thêm 1 lần cảnh cáo user',
			type: '',
			example: 'warns [tag] "lý do cảnh cáo"'
  		},

		{
			key: 'listban',
			prompt: 'xem danh sách user bị cấm vào nhóm',
			type: '',
			example: 'warns listban'
  		},

		{
			key: 'uban',
			prompt: 'xóa user khỏi danh sách bị cấm vào nhóm',
			type: '',
			example: 'warns unban [id của user cần xóa]'
  		},
		{
			key: 'view',
			prompt: '"tag" hoặc "để trống" hoặc "view all", lần lượt dùng để xem người được tag hoặc bản thân hoặc thành viên trong box bị cảnh cáo bao nhiêu lần ',
			type: '',
			example: 'warns view [@tag] / warns view'
  		},

		{
			key: 'reset',
			prompt: 'Reset toàn bộ dữ liệu warns trong nhóm của bạn',
			type: '',
			example: 'warns reset'
  		}

  		]
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('📢𝘽𝙤𝙩 𝙘ầ𝙣 𝙦𝙪𝙮ề𝙣 𝙦𝙪ả𝙣 𝙩𝙧ị 𝙫𝙞ê𝙣 để 𝙨ử 𝙙ụ𝙣𝙜 𝙡ệ𝙣𝙝 𝙣à𝙮\n𝙑𝙪𝙞 𝙡ò𝙣𝙜 𝙩𝙝ê𝙢 𝙫à 𝙩𝙝ử 𝙡ạ𝙞!', threadID, messageID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/datawarn.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(dataaa));
					}
  var datawarn = JSON.parse(fs.readFileSync(__dirname + `/cache/datawarn.json`)); //đọc nội dung file
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!datawarn.warns.hasOwnProperty(threadID)) {
			datawarn.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
  	
  }

  
  if(args[0] == "view") {
  	if(!args[1]) {
  		var msg = "";
  		var mywarn = datawarn.warns[threadID][senderID];
  		if(!mywarn) return api.sendMessage('📢𝘽ạ𝙣 𝙘𝙝ư𝙖 𝙗ị 𝙘ả𝙣𝙝 𝙘á𝙤 𝙡ầ𝙣 𝙣à𝙤', threadID, messageID);
  		var num = 1;
  		for(let reasonwarn of mywarn) {
  			msg += `Lần ${num}: reasonwarn\n`;
  		}
  		api.sendMessage(`📢𝘽ạ𝙣 đã 𝙗ị 𝙘ả𝙣𝙝 𝙘á𝙤 ${mywarn.length} 𝙡ầ𝙣:\n\n${msg}`, threadID, messageID);
  	}
  	else if(Object.keys(event.mentions).length != 0) {
  		var message = "";
  		var mentions = Object.keys(event.mentions);
  		for(let id of mentions) {
  			var name = (await Users.getData(id)).name 
  			var msg = "";
  			var so = 1;
  			var reasonarr = datawarn.warns[threadID][id];
  			if(typeof reasonarr != "object") {
  				msg += "+Chưa bị cảnh cáo lần nào\n"
  			} else {
  			for(let reason of reasonarr) {
  				msg += "+Lần "+(so++)+": "+reason+"\n";
  			}
  			}
  			message += "❃"+name+"\n"+msg+"\n";
  		}
  		api.sendMessage(message, threadID, messageID);
  	}
  	
  	else if(args[1] == "all") {
  		var dtwbox = datawarn.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await Users.getData(idtvw)).name , msg = "", solan = 1; 
  			for(let reasonwtv of dtwbox[idtvw]) {
  				msg += `Lần ${solan++}: ${reasonwtv}\n`
  			}
  			allwarn += `${name}:\n${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("📢𝙉𝙝ó𝙢 𝙗ạ𝙣 𝙘𝙝ư𝙖 𝙘ó 𝙖𝙞 𝙗ị 𝙘ả𝙣𝙝 𝙘á𝙤", threadID, messageID) : api.sendMessage("📌𝘿𝙖𝙣𝙝 𝙨á𝙘𝙝 𝙣𝙝ữ𝙣𝙜 𝙩𝙝à𝙣𝙝 𝙫𝙞ê𝙣 đã 𝙗ị 𝙘ả𝙣𝙝 𝙘á𝙤:\n\n"+allwarn, threadID, messageID);
  	}
  }
  
  else if(args[0] == "unban") {
  	var id = parseInt(args[1]), mybox = datawarn.banned[threadID];
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('📣𝘾𝙝ỉ 𝙦𝙩𝙫 𝙣𝙝ó𝙢 𝙢ớ𝙞 𝙘ó 𝙩𝙝ể 𝙨ử 𝙙ụ𝙣𝙜 𝙡ệ𝙣𝙝 𝙪𝙣𝙗𝙖𝙣!', threadID, messageID);
	
  	if(!id) return api.sendMessage("⚡️Cần nhập id người cần xóa khỏi danh sách bị cấm vào nhóm", threadID, messageID);
  	datawarn.banned;
  	if(!mybox.includes(id)) return api.sendMessage("⚡️Người này chưa bị cấm vào nhóm của bạn", threadID, messageID);
			api.sendMessage(`⚡️Đã xóa thành viên có id ${id} khỏi danh sách bị cấm vào nhóm`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete datawarn.warns[threadID][id]
			fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
  }
  
  else if(args[0] == "listban") {
  	var mybox = datawarn.banned[threadID];
  	var msg = "";
  	for(let iduser of mybox) {
  		var name = (await Users.getData(iduser)).name 
  		msg += "⚡️Name: " + name + "\n⚡️ID: " + iduser + "\n\n";
  	}
  	msg == "" ? api.sendMessage("⚡️Nhóm bạn chưa có ai bị cấm vào nhóm", threadID, messageID) : api.sendMessage("⚡️Những thành viên đã bị cấm vào nhóm:\n"+msg, threadID, messageID);
  }
  else if(args[0] == "reset") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('⚡️Chỉ qtv nhóm mới có thể sử dụng lệnh reset!', threadID, messageID);
  	
  	datawarn.warns[threadID] = {};
  	datawarn.banned[threadID] = [];
  	fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
  	api.sendMessage("⚡️Đã reset toàn bộ dữ liệu warn trong nhóm của bạn", threadID, messageID);
  }
  	 //◆━━━━━━━━━◆WARN◆━━━━━━━━━◆\\
  	 else{ 
  	 	   if (event.type != "message_reply" && Object.keys(event.mentions).length == 0)	return utils.throwError(this.config.name, threadID, messageID);
   
       //◆━━━━━━◆get iduser and reason<<<<<<<<\\
       var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('⚡️Chỉ qtv nhóm mới có thể cảnh cáo thành viên!', threadID, messageID);
  var reason = "";
		  if (event.type == "message_reply") {
		  	var iduser = [];
		  	iduser.push(event.messageReply.senderID);
		  	reason = (args.join(" ")).trim();
		  }
		  
		  else if (Object.keys(event.mentions).length != 0) {
		  	var iduser = Object.keys(event.mentions);
		  	var stringname = "";
		  	var nametaglength = (Object.values(event.mentions)).length;
		  	var namearr = Object.values(event.mentions);
		  	for(let i = 0; i < nametaglength; i++) {
		  		stringname += (Object.values(event.mentions))[i];
		  	}
		  	var message = args.join(" ");
		  	//var reason = (message.slice(stringname.length + nametaglength -1)).trim();
		  	for(let valuemention of namearr) {
		  		console.log(namearr);
		  		console.log(message);
		  		vitrivalue = message.indexOf(valuemention);
		  		console.log(vitrivalue);
		  		message = message.replace(valuemention,"");
		  	}
		 	var reason = message.replace(/\s+/g, ' ');
		  }
		  var arraytag = [];
		  var arrayname = [];
		  //Check xem đã bị cảnh cáo lần nào chưa
		for(let iid of iduser) {
			var id = parseInt(iid);
			var nametag = (await Users.getData(id)).name 
			arraytag.push({id: id, tag: nametag});
			
			if(!reason) reason += "⚡️Không có lý do nào được đưa ra";
			/*if(!datawarn.warns.hasOwnProperty(threadID)) {
			datawarn.warns[threadID] = {}; 
			}*/
			var dtwmybox = datawarn.warns[threadID];
			if(!dtwmybox.hasOwnProperty(id)) { 
			dtwmybox[id] = [];
			}
			var solan = (datawarn.warns[threadID][id]).length;
			arrayname.push(nametag+" lần "+(parseInt(solan)+1));
			var pushreason = datawarn.warns[threadID][id];
			pushreason.push(reason);
			if(!datawarn.banned[threadID]) {
				datawarn.banned[threadID] = [];
			}
			if((datawarn.warns[threadID][id]).length > 2) {
				
				api.removeUserFromGroup(parseInt(id), threadID)
				var banned = datawarn.banned[threadID];
				    banned.push(parseInt(id));
				fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
			}
		
		}//for

		api.sendMessage({body: `⚡️Đã cảnh cáo thành viên ${arrayname.join(", ")} với lý do: ${reason}`, mentions: arraytag}, threadID, messageID);
		fs.writeFileSync(__dirname + `/cache/datawarn.json`, JSON.stringify(datawarn, null, 2));
  }
  
};