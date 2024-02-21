import express from "express"
import cors from "cors"
import { adminRouter } from "./Routes/AdminRoute.js"
import { EmployeeRouter } from "./Routes/EmployeeRoute.js"
const app = express()
const Port = 5000
import  Jwt  from "jsonwebtoken"
import cookieParser from "cookie-parser"

app.use(express.static('Public'))
app.use(cookieParser())

app.use(cors({
     origin: ["http://localhost:3000"],
     methods: ['GET', 'POST', 'PUT', 'DELETE'],
     credentials: true
}))

// app.use(cors())
app.use(express.json())


app.use("/auth", adminRouter)
app.use("/employee", EmployeeRouter)

app.get("/",(req,res)=>{
     res.send("Hello World")
})

const verifyUser = (req, res, next) => {
     const token = req.cookies.token;
     if(token) {
         Jwt.verify(token, "jwt_secret_key", (err ,decoded) => {
             if(err) return res.json({Status: false, Error: "Wrong Token"})
             req.id = decoded.id;
             req.role = decoded.role;
             next()
         })
     } else {
         return res.json({Status: false, Error: "Not autheticated"})
     }
 }
 app.get('/verify',verifyUser, (req, res)=> {
     return res.json({Status: true, role: req.role, id: req.id})
 } )

app.listen(Port,()=>{
     console.log(`http://localhost:${Port}`)
})