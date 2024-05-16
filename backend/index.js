const express = require("express");
const podcastRouter = require("./src/router/showPodcast");
const connection = require("../backend/src/db/connect");
const cors = require('cors');
const app = express();
const port = 3000;

connection.connect((err) => {
	if (err) {
		console.log(err);
		throw "Database is not connected";
	} else {
		console.log("Database is connected");
	}
});
app.use(cors({
		origin: "http://localhost:5173",
		credentials: true
	}
));
app.use(express.json());
app.use("/", podcastRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});