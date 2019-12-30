const path = require('path')
const fs = require('fs')
const url = require('url')
const express = require('express')

const { IMAGES_DIR } = require('../../constants.js')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    if (req.files && req.body.id) {
      let image = req.files.image
      let imageFileName = path.join(IMAGES_DIR, req.body.id)
      image.mv(imageFileName)

      const resourceUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl + req.body.id
      })

      const imageUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: '/images/' + req.body.id
      })

      res.location(resourceUrl)
      res.status(201).send({ url: imageUrl })
    } else {
      res.status(400).send({ status: 'Bad request' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const imagePath = path.join(IMAGES_DIR, req.params.id)

    if (!fs.existsSync(imagePath)) {
      res.status(404).send('Not Found')
    }

    await fs.unlink(imagePath)
    res.status(204).send('No Content')

  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
