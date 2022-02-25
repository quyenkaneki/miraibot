module.exports.config = {
  name: "buildtool",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Upload file lên buildtool.dev",
  commandCategory: "Tiện ích",
  cooldowns: 0
};

module.exports.run = async function ({ api, event,args }) {
  const request = require('request')
  const cheerio = require('cheerio');
  const fs = require('fs')
  const { threadID, messageID } = event;
  const content = args.join(' ');
  if(!content) return api.sendMessage('Thiếu dữ liệu!', threadID, messageID);
  if(content.endsWith(".js") || content.endsWith(".json")) {
    var data = await fs.readFile(
      `${__dirname}/${content}`,
      "utf-8",
      async function (err, data) {
        if (err) return api.sendMessage(`Không tìm thấy file "${content}".`, threadID, messageID);
        await builtooldev(data)
      }
    );
  }
  else {
    await builtooldev(content)
  }
  async function builtooldev(content) {
    const options = {
        method: 'POST',
        url: 'https://buildtool.dev/verification',
        headers: {
          'cookie': 'paste_submitted=yes; last_code_class=language-js; last_page_link=code-viewer.php%3Fpaste%3D097ba7.language-js'
        },
        form: {
          'content': content,
          'code_class': 'language-js'
        }
    };
    request(options, function (error, response, body) {
      if(error) return api.sendMessage('Đã có lỗi xảy ra!', threadID, messageID);
      const $ = cheerio.load(body);
      $('a').each((index, el) => {
      if(index !== 0) return;
        return api.sendMessage(`Link của bạn đây: https://buildtool.dev/${el.attribs.href}`, threadID,
            async function(error, info) {
                if(error) return await shortLink(el.attribs.href)
            }, messageID);
      });
    });
  }
  async function shortLink(link) {
    const turl = require('turl');
    turl.shorten('https://buildtool.dev/' + link).then((res) => {
      return api.sendMessage(`Do bị hạn chế nên gửi link rút gọn: ${res}`, threadID, messageID);
    }).catch((err) => {
      return api.sendMessage(`Bỏ dấu cách: https://buildtool. dev/${link}`, threadID, messageID);
    });
  }
}
