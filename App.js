require("dotenv").config() //Usar variables entorno
const dbConnect = require("./config/mongo")
const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))


const port = process.env.PORT || 3000


app.use("/api",require("./routes"))


app.listen(port, ()=>{
    console.log('Tu app esta lista por http://localhost:'+port)

})

dbConnect()