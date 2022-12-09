
const {createLogger, transports, format } = require("winston");
const{combine, timestamp, label, colorize, simple, printf} = format;
const printFormat = printf(({timestamp,label, level , message}) =>{
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        //combine안에 가장 마지막에 던져주는 함수가 출력되는 포멧
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd",
        }),
        printFormat,
    ),
    console: combine(
        colorize(),
        simple(),
    )

}
const opts = {
    file: new transports.File ({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
    }),

    console: new transports.Console ({
        level: "info",
        format: printLogFormat.console,
        })

}
const logger = createLogger({ 
    transports: [opts.file]
})

if(process.env.NODE_ENV !=="production"){
   logger.add(opts.console);
}
logger.stream = {
    write: (message) => logger.info(message),
}
module.exports = logger;