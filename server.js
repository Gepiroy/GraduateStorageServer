import activitiesRouter from './server_modules/routers/activitiesRouter.js'
import actsRouter from './server_modules/routers/actsRouter.js'
import collectionsRouter from './server_modules/routers/collectionsRouter.js'
import containersRouter from './server_modules/routers/containersRouter.js'
import invoicesRouter from './server_modules/routers/invoicesRouter.js'
import itemsRouter from './server_modules/routers/itemsRouter.js'
import typesRouter from './server_modules/routers/typesRouter.js'
import usersRouter from './server_modules/routers/usersRouter.js'

import express from 'express'
import session from 'express-session' //npmjs says that I should later choose some external session store for this. Also don't use cookie-parser.
import passport from 'passport'
import './server_modules/passport.js' //just run a script to initiate passport's stuff.

const port = 3000;

const app = express();

app.use(express.json())
app.use(session({
    secret: "Gepiroy_will_be_A_SENIOR_one_day!",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use(passport.session()) //Now all the routers will be auth-checked.

app.use("/activities", activitiesRouter)
app.use("/acts", actsRouter)
app.use("/collections", collectionsRouter)
app.use("/containers", containersRouter)
app.use("/invoices", invoicesRouter)
app.use("/items", itemsRouter)
app.use("/types", typesRouter)
app.use("/users", usersRouter)

app.listen(port, ()=>{
    console.log("app is listening on port " + port)
})