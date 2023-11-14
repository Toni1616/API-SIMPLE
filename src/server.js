import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import compression from "compression"
import pino from "pino"

import userRoutes from './user.routes'
import mainRoutes from "./main.routes";

const app = express();
const port = 3000;

const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    limit: 20, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

app.use(compression())

// Apply the rate limiting middleware to all requests.
app.use(limiter)
app.use(express.json())
app.use(helmet())

app.use('/v1',mainRoutes)
app.use('/v1/user',userRoutes)

app.listen(port,()=>{
    console.log(`Hey,this is working: http://localhost:${port}`)
})