const express = required("express");

const app = express();
const port = process.env.port;

app.listen(port, () => {
  console.log("Server running on ${port}");
});
