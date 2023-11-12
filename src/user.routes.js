import express from "express";
import {expressYupMiddleware} from "express-yup-middleware";

import userService from "./services/user.service"
import {addUser, getUser, deleteUser, updateUser} from "./user.schemas"
import userController from "./controllers/user.controller"
import STATUS from "./STATUS";

const router = express.Router();

router.get(
    '/all',
    userController.getAllUsers
)

router.get(
    '/:id',
    expressYupMiddleware({schemaValidator: getUser}),
    userController.getUser
)

router.post(
    '/',
    expressYupMiddleware({schemaValidator: addUser}),
    userController.addUser
)

router.put(
    '/:id',
    expressYupMiddleware({schemaValidator: updateUser}),
    userController.updateUser
)

router.delete(
    '/:id',
    expressYupMiddleware({schemaValidator: deleteUser}),
    userController.deleteUser
)

export default router;