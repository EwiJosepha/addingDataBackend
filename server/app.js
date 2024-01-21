const express = require("express")
const app =express()
const cors = require('cors')
const dotenv = require("dotenv")
dotenv.config()
const dbservice =require("./dbservice")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//files have been well redistered now lets create our routes


//create
app.post('/insert', (req,res)=>{

})

//read
app.get("/getall", (req,res)=>{
  const db = dbservice.getDbServiceInstance()
   const result = db.getAllData() 
  result.then(data =>response.json({data:data})).catch(err => console.log(err)) 
})
//update

//delete

app.listen(process.env.PORT, ()=>{
  console.log("app is running");
})
