const { User, Post } = require('../models');


const newUser = async (req, res) => {
try {
const { firstName, lastName, email, phoneNumber } = (req.body);
const newUser = await Student.create({ 
        firstName,
        lastName, 
        email,
        phoneNumber,
    });   
    res.status(201).json({
        message: 'User created successfully',
        data: newUser
    });
} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
};




const getALLUsers = async (req, res)=>{
    try{
        const user = await User.findAll({
            include: {
                model: Post,
                attributes: [ "title" ]
            }})
        return res.status(200).json({data:user})

    }catch(error){
       return res.status(500).json({message:error.message})
    }
}



const getOneUser = async (req, res) => {
try {
const {id} = req.params;
const user = await User.findByPk(id, {
    includes: [{
        attributes: ['firstName', 'lastName', 'email'],
        Model: Post,
        as: "Post"
    }]
});

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    res.status(200).json({
        message: 'User seen successfully',
        data: user
    });
} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
};



const getUserbyPk = async(req, res)=> {
    try{
        const { id } = req.params
        const user = await User.findByPk(id,{ 
            include:{
                    model: Post,
                    attributes:["title"]
                }
        })

        if (!user) {
            return res.status(404).json({message:"user not found"})
        }

        return res.status(200).json({message: "user Found", data:user})

    }catch(error){
       return res.status(500).json({
            message: error.message
        })

    }

}



const updateUser = async (req, res) => {
try {
const {id} = req.params; 
const {firstName, lastName, email, phoneNumber} = req.body;
const user = await User.update({ firstName, lastName, email, phoneNumber },
     { where: { id } });

    res.status(200).json({
        message: 'User updated successfully',
        data: user
    });
} catch (error) {
    res.status(400).json({
        message: error.message
    });
}
};




const deleteUser = async (req, res) => {
try {
const {id} = req.params;
const user = await User.findOne({where: {id}});
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    await user.destroy();
    res.status(200).json({
        message: 'User deleted successfully'
    });
} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
};


module.exports = {
newUser,
getALLUsers,
getOneUser,
getUserbyPk,
updateUser,
deleteUser
};



