import express from 'express';
import {signup, login} from "../controller/user.controller.js";
import { confirm } from '../controller/user.controller.js';
import {contact} from "../controller/user.controller.js";
import {rent} from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/confirm",confirm);
router.post('/contact',contact);
router.post('/rent',rent);

export default router;