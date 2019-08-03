const express = require("express") 
const multer = require("multer")
const routes = new express.Router();
const uploadConfig = require("./config/upload")

routes.get('/', (req, res) => {
    return res.send(`Olá ${req.query.nome}!`)
})

const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')
const upload = multer(uploadConfig);

routes.get('/posts', PostController.index )
routes.post('/posts', upload.single('image'), PostController.store )
// routes.post('/posts', upload.single('image'), (req, res) => {
//     return res.json({Ok:true})
// })

routes.post('/posts/:id/like', LikeController.store )



module.exports = routes
