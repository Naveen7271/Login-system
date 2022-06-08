import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


//database connection 
connectDB(DATABASE_URL)


app.set('view engine','ejs')
app.use(express.urlencoded({ extended: true}));
//load Routes
app.use('/', web)

app.listen(port, () =>{
    console.log(`SERVER LISTENEING at http://localhost:${port}`)
})