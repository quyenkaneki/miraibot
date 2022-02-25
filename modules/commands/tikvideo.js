module.exports.config = {
  name: "tikvideo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Horizon",
  description: "lấy video tiktok no logo",
  commandCategory: "video",
  usages: "[url]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { createReadStream, unlinkSync, writeFileSync } = require("fs-extra");
  const axios = require("axios");
  const { threadID, messageID } = event;
  const request = require("request");
  if (event.type == "message_reply") {
    try {
      let results = {};
      let key = await axios.get(
        `https://api.snaptik.site/video-key?video_url=${event.messageReply.args[0]}`,
      );
      key = JSON.parse(JSON.stringify(key.data, null, 2));
      if (key.status !== "success")
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
          event.threadID,
        );
      let data = await axios.get(
        `https://api.snaptik.site/video-details-by-key?key=${key.data.key}`,
      );
      data = JSON.parse(JSON.stringify(data.data, null, 2));
      if (data.status !== "success")
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
          event.threadID,
        );
      results = {
        author: data.data.author.nickname,
        idtiktok: data.data.author.unique_id,
        description: data.data.description,
        video: {
          with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
          no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
          no_watermark_raw: data.data.video.no_watermark_raw,
        },
        music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`,
      };
      var path = __dirname + `/cache/tiktok.mp4`;
      const { data: stream } = await axios.get(results.video.no_watermark, {
        responseType: "arraybuffer",
      });
      writeFileSync(path, Buffer.from(stream, "utf-8"));
      return api.sendMessage(
        {
          body: `Tên : ${results.author} | ID TikTok : @${
            results.idtiktok
          } | Nội Dung : ${results.description || "Không Có Nội Dung"}`,
          attachment: createReadStream(path),
        },
        threadID,
        () => unlinkSync(path),
        messageID,
      );
    } catch (e) {
      return api.sendMessage(
        "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
        event.threadID,
      );
    }
  }
  if (args.length == 0)
    return api.sendMessage(
      "vui lòng nhập link , kiểu : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179' hoặc lấy nhạc thông qua : '/tiktok music https://www.tiktok.com/@choul2002/video/6996459846480465179'",
      event.threadID,
      event.messageID,
    );
  switch (args[0]) {
    case "music": {
      try {
        let results = {};
        if (args.length == 0)
          return api.sendMessage(
            "vui lòng nhập link , kiểu : '/tiktok https://www.tiktok.com/@choul2002/video/6996459846480465179'",
            event.threadID,
            event.messageID,
          );
        let key = await axios.get(
          `https://api.snaptik.site/video-key?video_url=${args[1]}`,
        );
        key = JSON.parse(JSON.stringify(key.data, null, 2));
        if (key.status !== "success")
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
        let data = await axios.get(
          `https://api.snaptik.site/video-details-by-key?key=${key.data.key}`,
        );
        data = JSON.parse(JSON.stringify(data.data, null, 2));
        if (data.status !== "success")
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
        results = {
          author: data.data.author.nickname,
          idtiktok: data.data.author.unique_id,
          description: data.data.description,
          video: {
            with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
            no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
            no_watermark_raw: data.data.video.no_watermark_raw,
          },
          music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`,
        };
        var path = __dirname + `/cache/tiktok.m4a`;
        const { data: stream } = await axios.get(results.music, {
          responseType: "arraybuffer",
        });
        writeFileSync(path, Buffer.from(stream, "utf-8"));
        return api.sendMessage(
          {
            body: `Tên : ${results.author} | ID TikTok : @${
              results.idtiktok
            } | Nội Dung : ${results.description || "Không Có Nội Dung"}`,
            attachment: createReadStream(path),
          },
          threadID,
          () => unlinkSync(path),
          messageID,
        );
      } catch (e) {
        console.log(e);
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
          event.threadID,
        );
      }
    } break;
    default:
      try {
        let results = {};
        let key = await axios.get(
          `https://api.snaptik.site/video-key?video_url=${args[0]}`,
        );
        key = JSON.parse(JSON.stringify(key.data, null, 2));
        if (key.status !== "success")
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
        let data = await axios.get(
          `https://api.snaptik.site/video-details-by-key?key=${key.data.key}`,
        );
        data = JSON.parse(JSON.stringify(data.data, null, 2));
        if (data.status !== "success")
          return api.sendMessage(
            "Link Không Tồn Tại Hoặc Sai Link , Vui Lòng Báo Admin",
            event.threadID,
          );
        results = {
          author: data.data.author.nickname,
          idtiktok: data.data.author.unique_id,
          description: data.data.description,
          video: {
            with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
            no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
            no_watermark_raw: data.data.video.no_watermark_raw,
          },
          music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`,
        };
        var path = __dirname + `/cache/tiktok.mp4`;
        const { data: stream } = await axios.get(results.video.no_watermark, {
          responseType: "arraybuffer",
        });
        writeFileSync(path, Buffer.from(stream, "utf-8"));
        return api.sendMessage(
          {
            body: `Tên : ${results.author} | ID TikTok : @${
              results.idtiktok
            } | Nội Dung : ${results.description || "Không Có Nội Dung"}`,
            attachment: createReadStream(path),
          },
          threadID,
          () => unlinkSync(path),
          messageID,
        );
      } catch (e) {
        return api.sendMessage(
          "Link Không Tồn Tại Hoặc Sai Link, Hoặc Video Ở Chế Độ riêng tư , Vui Lòng Báo Admin",
          event.threadID,
        );
      }
  }
};
