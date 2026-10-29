const { Post, User } = require('../models');


const   newPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;

        const newPost = await Post.create({
            title,
            content,
            userId
        });
        res.status(201).json({
            message: 'Post created successfully',
            data: newPost
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};




const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attributes: [ firstName, lastName, email ]
        }
    });

        res.status(200).json({
            message: `All Posts retrieved successfully. Total posts: ${posts.length}`,
            data: posts
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



const getOnePost = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await Post.findByPk(id, {
            include: User
        });

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post retrieved successfully',
            data: post
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



const getPostbyPk = async(req, res)=> {
    try{
        const { id } = req.params
        const post = await Post.findByPk(id,{ 
            include:[{
                    model: User,
                    as:"userpost",
                    attribute:["firstName", "lastName"]
                }]
        })

        if (!post) {
            return res.status(404).json({message:"Post not found"})
        }

        return res.status(200).json({message: "Post Found", data:post})

    }catch(error){
       return res.status(500).json({
            message: error.message
        })

    }

}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, userId } = req.body;

        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        await post.update({
            title,
            content,
            userId
        });

        res.status(200).json({
            message: 'Post updated successfully',
            data: post
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};



const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findByPk(id);

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }
         await post.destroy({where});

        res.status(200).json({
            message: 'Post deleted successfully'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    newPost,
    getAllPosts,
    getOnePost,
    getPostbyPk,
    updatePost,
    deletePost
};



