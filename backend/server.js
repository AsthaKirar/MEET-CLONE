import app from "./src/app.js";
import http from "http";
import config from "./src/config/config.js";
import connecToDB from "./src/db/db.js";


connecToDB();


const server = http.createServer(app);
const PORT = config.PORT;

server.listen(PORT, () => {
  console.log("server is runing port 3000");
});
