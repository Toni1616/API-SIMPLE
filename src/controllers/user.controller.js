import userService from "../services/user.service";
import {StatusCodes} from "http-status-codes";
import STATUS from "../STATUS";

const addUser = (req,res) => {
    const {body: user} = req

    const addedUser = userService.addUser(user)

    res.status(StatusCodes.CREATED).send({
        status: STATUS.SUCCESS,
        user: addedUser
    })
}

const updateUser = (req,res) => {
    const {body: user} = req

    const id = parseInt(req.params.id,10)

    const updatedUser = userService.updateUser(id,user)

    if(updatedUser) {
        return res.status(StatusCodes.OK).send({
            status: STATUS.SUCCESS,
            user: updatedUser
        })
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.FAILURE,
            message: `user ${id} not found`
        })
    }
}

const getAllUsers = (req,res) => {
    const users =  userService.getAllUsers()

    if (users.length){
        return res.status(StatusCodes.OK).send(users)
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.FAILURE,
        message: 'No users found.',
    })
}

const getUser = (req,res) => {
    const id = parseInt(req.params.id,10)
    const user =  userService.getUser(id)

    if (user){
        return res.status(StatusCodes.OK).send({
            status: STATUS.SUCCESS,
            user
        })
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status: STATUS.FAILURE,
        message: `No ${id} found.`,
    })
}

const deleteUser = (req,res) => {
    const id = parseInt(req.params.id,10)

    // const deleteUser = userService.removeUser(id)
    //
    // if(deleteUser){
    //     return res.status(StatusCodes.OK).send({
    //         status: STATUS.SUCCESS,
    //         message: `user ${id} is deleted.`
    //     })
    // }else{
    //     return res.status(StatusCodes.NOT_FOUND).send({
    //         status: STATUS.FAILURE,
    //         message: `user ${id} not found.`
    //     })
    // }
    const user = userService.getUser(id)
    if(user){
        userService.removeUser(user.id)

        return res.status(StatusCodes.OK).send({
            status: STATUS.SUCCESS,
            message: `user ${id} is deleted.`
        })
    }else{
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.FAILURE,
            message: `user ${id} not found.`
        })
    }
}

export default {
    updateUser,addUser,getAllUsers,getUser,deleteUser
}