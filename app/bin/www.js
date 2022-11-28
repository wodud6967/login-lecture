const app = require("../app");
console.log("www가 먼저다");
const PORT = 3000;
app.listen(PORT, () => {
    console.log("로그확장");
});


