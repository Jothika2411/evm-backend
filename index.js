import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongoDB from './src/libs/mongoose/mongooDb.js';
import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

connectMongoDB();

app.use("/api", routes)

app.use("/", (req, res)=>{
  res.send("Server is running")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
