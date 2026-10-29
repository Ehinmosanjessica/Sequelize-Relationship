const express = require("express")

const { newPost, getAllPosts, getOnePost,getPostbyPk, updatePost, deletePost } = require("../controller/post")

const router = express.Router()


router.post("/createPost", newPost)
router.get("/getallPost", getAllPosts)
router.get("/getonePost/:id", getOnePost)
router.get("/getPostbypk/:id",getPostbyPk,)
router.patch("/updatePost/:id", updatePost)
router.delete("/deletePost/:id", deletePost)







module.exports = router