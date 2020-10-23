const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));

app.get('/stats', function(req, res) {
    res.send("This is where the sats page needs to be");  
});

app.get("/stats"), (req,res) => {
	db.Workout.findAll().then(res => {
      res.json(res)
  }).catch(err => console.log(err));
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
