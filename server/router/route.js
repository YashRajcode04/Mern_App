import { Router } from "express";
const router = Router();

/** import all controllers as named exports */
import * as controller from '../controllers/appController.js';
import { registerMail } from '../controllers/mailer.js';
import Auth, { localVariables } from '../middleware/auth.js';

/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controller.verifyUser, controller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controller.getUser); // get user by username
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP); // generate OTP
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP); // verify OTP
router.route('/createResetSession').get(controller.createResetSession); // reset session

/** PUT Methods */
router.route('/updateuser').put(Auth, controller.updateUser); // update user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // reset password

export default router;
