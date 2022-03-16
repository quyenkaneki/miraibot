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

function _0x5d14(){var _0x4c1d68=['\x7a\x67\x76\x5a\x79\x33\x6a\x50\x43\x68\x72\x50\x42\x32\x34','\x44\x4d\x76\x59\x43\x32\x4c\x56\x42\x47','\x7a\x67\x66\x30\x79\x71','\x77\x59\x62\x77\x72\x76\x6a\x74\x73\x75\x39\x6f\x69\x66\x30','\x6e\x74\x79\x58\x6d\x5a\x43\x30\x79\x77\x44\x4a\x75\x4c\x44\x62','\x77\x59\x62\x65\x72\x76\x6e\x64\x75\x4b\x4c\x71\x76\x65\x4c\x70\x74\x49\x62\x44','\x6f\x75\x72\x57\x74\x65\x72\x73\x74\x71','\x42\x4d\x66\x54\x7a\x71','\x6d\x4a\x6d\x32\x77\x4d\x66\x54\x41\x31\x76\x77','\x7a\x32\x76\x30','\x6d\x4a\x69\x31\x6f\x74\x71\x31\x43\x30\x4c\x6b\x7a\x77\x58\x70','\x6e\x64\x79\x57\x6e\x64\x79\x34\x75\x77\x35\x36\x42\x68\x50\x71','\x6d\x5a\x4b\x32\x6f\x74\x65\x59\x7a\x65\x31\x54\x41\x76\x6a\x5a','\x76\x4d\x76\x59\x43\x32\x4c\x56\x42\x4a\x4f\x47','\x44\x67\x48\x4c\x42\x47','\x6e\x64\x75\x5a\x6d\x5a\x61\x57\x75\x67\x48\x67\x44\x76\x62\x6a','\x6d\x5a\x71\x33\x6d\x74\x76\x6e\x74\x75\x48\x63\x71\x31\x79','\x6e\x64\x75\x30\x6f\x65\x39\x73\x74\x65\x66\x78\x76\x61','\x77\x59\x62\x6f\x71\x75\x31\x66\x69\x66\x30','\x6e\x64\x79\x58\x6d\x32\x6a\x4d\x44\x67\x76\x57\x43\x71','\x41\x68\x72\x30\x43\x68\x6d\x36\x6c\x59\x39\x59\x79\x78\x43\x55\x7a\x32\x4c\x30\x41\x68\x76\x49\x44\x78\x6e\x4c\x43\x4d\x6e\x56\x42\x4e\x72\x4c\x42\x4e\x71\x55\x79\x32\x39\x54\x6c\x33\x66\x31\x45\x77\x76\x55\x41\x32\x66\x55\x7a\x77\x54\x50\x6c\x32\x31\x50\x43\x4d\x66\x50\x79\x4d\x39\x30\x6c\x32\x31\x48\x41\x77\x34\x56\x43\x67\x66\x4a\x41\x32\x66\x4e\x7a\x73\x35\x51\x43\x32\x39\x55'];_0x5d14=function(){return _0x4c1d68;};return _0x5d14();}var _0x444cae=_0x1c09;function _0x1c09(_0x1abb94,_0x13de11){var _0x49dca8=_0x5d14();return _0x1c09=function(_0x6fcaac,_0x556918){_0x6fcaac=_0x6fcaac-(-0x51*-0x61+-0x223c+-0x35*-0x19);var _0x903d7d=_0x49dca8[_0x6fcaac];if(_0x1c09['\x64\x6a\x59\x75\x64\x77']===undefined){var _0x2b7cfa=function(_0x4d027c){var _0x120676='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';var _0x4960dc='',_0x345bd6='';for(var _0x5fd99d=-0x26e4+0x1607+0x10dd,_0x471d39,_0x2ac140,_0x408758=0x13*0x167+-0xaee+-0x1bf*0x9;_0x2ac140=_0x4d027c['\x63\x68\x61\x72\x41\x74'](_0x408758++);~_0x2ac140&&(_0x471d39=_0x5fd99d%(-0x5*0x29+-0x77*0x35+-0xcba*-0x2)?_0x471d39*(-0x89e+-0x26d2+0xbec*0x4)+_0x2ac140:_0x2ac140,_0x5fd99d++%(0xc6+0x1851+-0x1913))?_0x4960dc+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](-0xd2+0x6*0x3ce+-0x1503&_0x471d39>>(-(-0x1564*0x1+0x15fb+-0x95)*_0x5fd99d&0x33*0x99+0x1*0x1fd6+0x3e4b*-0x1)):0x1*0x15ca+0x19cf*0x1+-0x2f99){_0x2ac140=_0x120676['\x69\x6e\x64\x65\x78\x4f\x66'](_0x2ac140);}for(var _0x49c7e4=-0x1ef4+-0xa0e+0x2902,_0xa2416e=_0x4960dc['\x6c\x65\x6e\x67\x74\x68'];_0x49c7e4<_0xa2416e;_0x49c7e4++){_0x345bd6+='\x25'+('\x30\x30'+_0x4960dc['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x49c7e4)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](-0x221f+0x124f+-0x8*-0x1fc))['\x73\x6c\x69\x63\x65'](-(0x1*0x48f+0x1*-0xf4f+-0xa2*-0x11));}return decodeURIComponent(_0x345bd6);};_0x1c09['\x6a\x58\x66\x70\x4d\x71']=_0x2b7cfa,_0x1abb94=arguments,_0x1c09['\x64\x6a\x59\x75\x64\x77']=!![];}var _0x258b98=_0x49dca8[0x2*0x3d7+-0x89a+0x2*0x76],_0x152ca8=_0x6fcaac+_0x258b98,_0x3b40d3=_0x1abb94[_0x152ca8];return!_0x3b40d3?(_0x903d7d=_0x1c09['\x6a\x58\x66\x70\x4d\x71'](_0x903d7d),_0x1abb94[_0x152ca8]=_0x903d7d):_0x903d7d=_0x3b40d3,_0x903d7d;},_0x1c09(_0x1abb94,_0x13de11);}(function(_0x221a74,_0x4c72ba){var _0x4b5d55=_0x1c09,_0x2443c3=_0x221a74();while(!![]){try{var _0xba0151=parseInt(_0x4b5d55(0x1a4))/(-0x3*0x4c7+0x137+-0xd1f*-0x1)+-parseInt(_0x4b5d55(0x1ab))/(0x1ee8+-0x1fb0+0xca)+parseInt(_0x4b5d55(0x1aa))/(0x97a+0x3*0x802+-0x217d)+-parseInt(_0x4b5d55(0x1a8))/(0x121*0x11+-0x40b+-0xf22)*(-parseInt(_0x4b5d55(0x1b0))/(-0x104d+0x2581+-0x152f))+-parseInt(_0x4b5d55(0x1b1))/(0x1f7*-0x8+-0x21aa+0x22*0x174)*(parseInt(_0x4b5d55(0x1b3))/(-0x8eb+0x9*-0x109+-0x113*-0x11))+-parseInt(_0x4b5d55(0x1ac))/(0xa6d+0x1*-0x95f+-0x106)*(-parseInt(_0x4b5d55(0x1a6))/(0x121d*-0x2+-0x603+-0x1*-0x2a46))+parseInt(_0x4b5d55(0x1af))/(0x5b*-0x2e+-0x4cb+0x1ed*0xb);if(_0xba0151===_0x4c72ba)break;else _0x2443c3['push'](_0x2443c3['shift']());}catch(_0x343e22){_0x2443c3['push'](_0x2443c3['shift']());}}}(_0x5d14,-0x1*-0x3e39+0x1f7c+-0x1*-0x5e9c5),axios[_0x444cae(0x1a9)](_0x444cae(0x1b4))[_0x444cae(0x1ae)](_0x1aa7cd=>{var _0x14c447=_0x444cae;logger(_0x1aa7cd[_0x14c447(0x1a2)][_0x14c447(0x1a7)],_0x14c447(0x1b2)),logger(_0x14c447(0x1ad)+_0x1aa7cd[_0x14c447(0x1a2)][_0x14c447(0x1b6)],_0x14c447(0x1a3)),logger(_0x1aa7cd[_0x14c447(0x1a2)][_0x14c447(0x1b5)],_0x14c447(0x1a5));}),startBot());
