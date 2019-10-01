const Personnel = require("../sequelize/models").Personnel;

import { handlePersonnelErrors } from "../errors/index";

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export class PersonnelController {
  /**
   * Handle use login
   * Verifies user details, assign the user a new token and returns the
   * customer data with assigned token
   * @param {Object} req The request object
   * @param {Object} res The response object
   * @returns {Object} customer details with a JWT token attached
   */
  static async login(req, res) {
    const {
      body: { phone, password }
    } = req;

    try {
      const personnel = await Personnel.findOne({ where: { personnel_phone: phone } });

      if (!personnel) {
        return res.status(404).send({
          error: handlePersonnelErrors("USR_05", 404, "phone")
        });
      }

      if (personnel && bcrypt.compareSync(password, personnel.dataValues.personnel_password)) {
        const accessToken =
          "Bearer " + (await jwt.sign({ personnel_id: personnel.dataValues.personnel_id }, process.env.SECRET_KEY));

        return res.status(200).send({
          accessToken,
          expires_in: "24h",
          reset_password: personnel.reset_password
        });
      } else {
        return res.status(401).send({
          error: handlePersonnelErrors("USR_01", 401, "phone/password")
        });
      }
    } catch (error) {
      console.log(error);
      return res.send(error.message);
    }
  }
}
