const router = require("express").Router();

const { getallusers,createuser,updateuser,deleteuser } = require("../controllers/users.contoller");

const users = require("../models/users.model");



router.get("/",getallusers);
router.post("/",createuser);
router.put("/:id",updateuser);
router.delete("/:id",deleteuser);




module.exports= router;