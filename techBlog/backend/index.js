import express from 'express'
const app = express()
const port = 3000
import cors from 'cors';
import "dotenv/config"
import "./src/config/db.js"
import bodyParser from 'body-parser'
import { blogRouter } from './src/routers/blogRouter.js'
import { authRouter } from './src/routers/AuthRouter.js'
import { userRouter } from './src/routers/UserRouter.js'

app.use(express.json())
app.use(bodyParser.json())
app.use(cors());
app.use("/image", express.static('./public/image'))
app.use('/api/users', userRouter)
app.use('/api/blogs', blogRouter)
app.use("/", authRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})