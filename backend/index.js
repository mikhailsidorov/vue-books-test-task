const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const imageRoutes = require('./routes/images')

const {IMAGES_DIR} = require('./constants.js')

if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR)
}

const corsOptions = {
  origin: '*'
}

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(fileUpload({createParentPath: true}))
app.use(cors(corsOptions))
app.use('/images', express.static(IMAGES_DIR))

app.use('/api/images', imageRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`\n Listening http://localhost:${port}`)
})
