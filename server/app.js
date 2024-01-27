const express = require("express")
const app = express()
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const dbservice = require("./dbservice")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//files have been well registered now lets create our routes
app.get('/client/', (req, res) => {
  res.status(200).send("our html file <h1>hello world</h1>")
})

//create
app.post('/insert', (req, res) => {

})

//read
app.get("/getall", (req, res) => {
  const db = dbservice.getDbServiceInstance()
  const result = db.getAllData()
  result.then(data => data.json({ data: data })).catch(err => console.log(err))
})
//update

//delete

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log("app is running on port " + PORT);
})
