import { TaskController } from "../controllers";
const passport = require("passport");

import { Router } from "express";

const router = Router();

router.get("/assigned", passport.authenticate("jwt", { session: false }), TaskController.all);

export default router;
