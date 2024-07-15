import express from 'express'
const app = express();
const port = process.env.PORT || '3000'
import DBConnection from './DB/DBConnection.js';
import web from './Route/web.js'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"

//Database
DBConnection(DATABASE_URL);


app.use(express.json())
//Load routes
app.use("/Employee", web)

app.listen(port, () => {
    console.log(`Server is listening at localhost ${port}`);
})
