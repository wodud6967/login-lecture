const app = require("../app");
const logger = require("../src/config/logger");
console.log("www가 먼저다");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});


