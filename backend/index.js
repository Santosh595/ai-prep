require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/dbConnection");

const PORT = process.env.PORT;

const app = express();

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/user'));

app.use('/api/interviews', require('./routes/interviewRoutes'));

app.use('/api/questions',require('./routes/questionRoutes'))



app.listen(PORT,()=> console.log(`Server started on PORT: ${PORT}`));