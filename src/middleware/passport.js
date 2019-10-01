import passport from "passport";

const Personnel = require("../sequelize/models").Personnel;
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: "phone",
      passwordField: "password"
    },
    async (phone, password, done) => {
      try {
        const personnel = await Personnel.findOne({ where: { personnel_phone: phone } });

        if (!personnel) {
          return done({ message: "Phone not found" });
        }

        const passwordsMatch = await bcrypt.compare(password, personnel.personnel_password);

        if (passwordsMatch) {
          return done(null, personnel, { message: "logged in" });
        }

        return done({ error: "You have entered an incorrect password" });
      } catch (error) {
        done(error);
      }
    }
  )
);

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JWTStrategy(
    {
      secretOrKey,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },
    (jwtPayload, cb) => {
      return cb(null, jwtPayload);
    }
  )
);

module.export = passport;
