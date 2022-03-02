const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

// const nodeVersion = semver.parse(process.version);
// if (nodeVersion.major < 13) {
//     logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
//     return process.exit(0);
// };

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! THIS BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

function _0x5932(){var _0x44e3d7=['8OxulaE','5789113EfMrNW','[\x20DESCRIPTION\x20]','4168122jqUUtF','357278HgBhMN','618095aqNAUQ','219762SXEORl','[\x20NAME\x20]','77sLcgIV','https://raw.githubusercontent.com/quyenkaneki/miraibot/main/package.json','2097344ydXpKy','[\x20VERSION\x20]','version','get','8180631bKpqZT','name','data','10lUemdt','24tRuNYq'];_0x5932=function(){return _0x44e3d7;};return _0x5932();}var _0x468e35=_0x3151;function _0x3151(_0x247266,_0x2c9ef6){var _0x59326d=_0x5932();return _0x3151=function(_0x315177,_0x4ab904){_0x315177=_0x315177-0x1f4;var _0x39f7c4=_0x59326d[_0x315177];return _0x39f7c4;},_0x3151(_0x247266,_0x2c9ef6);}(function(_0x4f5c46,_0x454764){var _0x131166=_0x3151,_0x431cb5=_0x4f5c46();while(!![]){try{var _0x2232e1=parseInt(_0x131166(0x1fd))/0x1+-parseInt(_0x131166(0x203))/0x2+parseInt(_0x131166(0x1fc))/0x3+-parseInt(_0x131166(0x1f8))/0x4*(parseInt(_0x131166(0x1fe))/0x5)+-parseInt(_0x131166(0x1ff))/0x6*(-parseInt(_0x131166(0x201))/0x7)+-parseInt(_0x131166(0x1f9))/0x8*(-parseInt(_0x131166(0x1f4))/0x9)+-parseInt(_0x131166(0x1f7))/0xa*(parseInt(_0x131166(0x1fa))/0xb);if(_0x2232e1===_0x454764)break;else _0x431cb5['push'](_0x431cb5['shift']());}catch(_0x4e6dc7){_0x431cb5['push'](_0x431cb5['shift']());}}}(_0x5932,0xb51cf),axios[_0x468e35(0x206)](_0x468e35(0x202))['then'](_0x678c0f=>{var _0x4c0557=_0x468e35;logger(_0x678c0f['data'][_0x4c0557(0x1f5)],_0x4c0557(0x200)),logger('Version:\x20'+_0x678c0f['data'][_0x4c0557(0x205)],_0x4c0557(0x204)),logger(_0x678c0f[_0x4c0557(0x1f6)]['description'],_0x4c0557(0x1fb));}),startBot());
