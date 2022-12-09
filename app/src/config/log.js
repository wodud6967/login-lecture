//모겐로거로 로거찍는법 지금은 안씀 윈스턴썼음

const fs = require("fs");
const appRoot = require("app-root-path")
//절대경로 찍는 모둘 approotpath

const accessLogStream = fs.createWriteStream(
    // path.join(__dirname, 'access.log'),
    `${appRoot}/log/access.log`,
    { flags: 'a' }
);
module.exports = accessLogStream;