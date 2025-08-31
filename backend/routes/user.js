const {Router} = require("express");

const { login, signup, getCurrrentUser } = require("../controllers/user")

const auth = require("../middlewares/authMiddleware");

const router = Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/current", auth, getCurrrentUser);

module.exports = router;