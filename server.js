const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const products = require("./routes/api/products");
const posts = require("./routes/api/posts");

const app = express();
const PORT = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("mongodb connected"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
app.use("/api/products", products);

// Serve static assets if in production

if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.get("/", (req, res) => {
	res.send("hello geko");
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
