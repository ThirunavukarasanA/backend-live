const Router = require("express").Router();
const { createEnquiry } = require("../Controller/Form");
Router.route("/enquiry").post(createEnquiry);
module.exports = Router;
