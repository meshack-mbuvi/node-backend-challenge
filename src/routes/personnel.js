import { Router } from "express";

const jwt = require("jsonwebtoken");
const passport = require("passport");

const router = Router();

router.post("/login", (req, res, next) => {
  return passport.authenticate("local", { session: false }, async (err, personnel, info) => {
    if (err) {
      return res.send(err);
    }

    if (personnel) {
      const Authorization =
        "Bearer " + (await jwt.sign({ personnel_id: personnel.dataValues.personnel_id }, process.env.SECRET_KEY));

      return res.status(200).send({
        Authorization,
        expires_in: "24h",
        reset_password: personnel.reset_password
      });
    }

    return status(400).info;
  })(req, res, next);
});

export default router;
