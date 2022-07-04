const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const User = require("./schema.js")
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route

const db = require("./index.js");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.post("/add_user", async (req, res) => {
  console.log(req.body.publickey)
  const key = req.body.publickey;

  const existUser = await User.findOne({
    publickey: key,
  });

  if (!existUser) {
    const user = new User({
      publickey: key,
    });
    
    await user.save();

    return res.json({
      success: true,
      user : user,
    });
  }

  return res.json({
    success: true,
    user : existUser,
  });

});

// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});