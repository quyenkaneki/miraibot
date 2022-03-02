/**
 * @author ProCoderMew
 * @warn Do not edit code or edit credits
 * @apikey Reg key tại: https://meewmeew.info/site
 */
module.exports.config = {
    name: "xoso",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ProCoderMew",
    description: "Xem kết quả xổ số 40 tỉnh thành",
    commandCategory: "other",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        meewmeewapi: ""
    },
    envConfig: {
        APIKEY: ""
    }
}

module.exports.onLoad = async function () {
    console.log('\x1b[1m=\x1b[5m'.repeat(20) + " Reg APIKEY tại meewmeew.info/site " + '='.repeat(20) + "\x1b[0m");
};
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { APIKEY } = global.configModule.xoso;
    const { MeewMeew } = global.nodemodule.meewmeewapi;
    const meewneew = new MeewMeew(APIKEY);
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    const province = [
        'ha_noi', 'quang_ninh', 'bac_ninh',
        'hai_phong', 'nam_dinh', 'thai_binh',
        'binh_duong', 'tra_vinh', 'vinh_long',
        'ca_mau', 'dong_thap', 'bac_lieu',
        'ben_tre', 'vung_tau', 'can_tho',
        'dong_nai', 'soc_trang', 'an_giang',
        'binh_thuan', 'tay_ninh', 'binh_phuoc',
        'hau_giang', 'long_an', 'da_lat',
        'kien_giang', 'tien_giang', 'tp_ho_chi_minh',
        'gia_lai', 'ninh_thuan', 'phu_yen',
        'thua_thien_hue', 'dac_lac', 'quang_nam',
        'binh_dinh', 'quang_binh', 'dac_nong',
        'quang_ngai', 'kon_tum', 'da_nang',
        'khanh_hoa'
    ];
    if (args.length == 0 || !province.includes(c[0])) return f("Các tỉnh thành hiện có: " + province.join(', '), d);
    try {
        const { data } = await meewneew.lotteryToday(c[0]);
        const result = Object.entries(data.data);
        var title = data.title;
        result.map(([key, value]) => { 
            title += `\n${key}: ${value.join(" - ")}`;
        });
        return f(title, d);
    } catch (error) {
        return f("Lỗi: " + error.message, d);
    }
};
