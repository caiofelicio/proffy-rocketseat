// server
const express = require( "express" )
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require( "./pages" )

// configuring nunjucks ( template engine )
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    autoescape: false,
    noCache: true,
})

// server start and configuration
server
//receive datas from req.body
.use(express.urlencoded( {extended: true } ))
// configure static files (css, scripts, images)
.use(express.static( "public" ))
// application routes
.get( "/", pageLanding )
.get( "/study", pageStudy ) 
.get( "/give-classes", pageGiveClasses )
.post( "/save-classes", saveClasses )
// start server
.listen(5500)