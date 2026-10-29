const express = require("express")

const { newUser, getALLUsers, getOneUser, getUserbyPk, updateUser, deleteUser,} = require("../controller/user")

const router = express.Router()

router.post("/createUser", newUser);

router.get("/getalluser", getALLUsers);

router.get("/getoneuser/:id", getOneUser);

router.get("/getUserbypk/:id",getUserbyPk);

router.patch("/updateUser/:id", updateUser);

router.delete("/deleteUser/:id", deleteUser);





module.exports = router;

