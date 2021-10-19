import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
  console.log("server run on port 4000");
});
