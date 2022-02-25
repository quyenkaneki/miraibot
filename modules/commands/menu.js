module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "lỡ xóa credit",
	description: "Menu, just a menu",
	usages: "[all/-a] [số trang]",
	commandCategory: "danh sách lệnh",
	cooldowns: 5
};

module.exports.handleReply = ({ api, event, handleReply }) => {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "Not a number";
	else if (num > data.length || num <= 0) msg = "Not available";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += `「    ${command_config.commandCategory.toUpperCase()}    」\n`;
			msg += `╭───╮\nTên: ${dataAfter}\n╰───╯`;
			msg += `\n📜Mô tả: ${command_config.description}`;
			msg += `\n✍Cách dùng: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n🕐Thời gian chờ: ${command_config.cooldowns || 5}s`;
			msg += `\n🐧Quyền hạn: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
			msg += `\n\n» Module code by ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `「    ${dataAfter.group.toUpperCase()}    」\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n+ Reply tin nhắn theo số để xem thông tin chi tiết lệnh";
		}
	}

	return api.sendMessage(msg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	const command = commands.values();
	var group = [], msg = "- ===+ Mirai Pr0ject +=== -\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 10);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "Not a number";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
			else check = true;
		}
		if (check) {
			index_start = (page_num_input) ? (page_num_input * 10) - 10 : 0;
			bonus = index_start;
			index_end = (index_start + 10 > all_commands.length) ? all_commands.length : index_start + 10;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n+ Page(${page_num_input || 1}/${page_num_total})`;
			msg += `\n+ Để xem các trang khác, dùng: ${prefix}menu [all/-a] [số trang]`;
			msg += "\n+ Reply tin nhắn theo số để xem thông tin chi tiết lệnh";
		}
		return api.sendMessage(msg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 10);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "Not a number";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "Not available";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 10) - 10 : 0;
		bonus = index_start;
		index_end = (index_start + 10 > group.length) ? group.length : index_start + 10;
		console.log(page_num_input)
		console.log(index_start)
		console.log(index_end)
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1} -「 ${commandGroup.group.toUpperCase()} 」`);
		msg += `\n\n+ Page(${page_num_input || 1}/${page_num_total})`;
		msg += `\n+ Để xem các trang khác, dùng: ${prefix}menu [số trang]`;
		msg += `\n+ Reply tin nhắn theo số để xem các lệnh theo phân loại`;
		msg += `\n+ Có gì khó hiểu thì liên hệ admin`;
	}
	return api.sendMessage(msg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
}