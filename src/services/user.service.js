import userDao from "../models/persistence/user.dao"

const getUser = (userId) => {
    return userDao.get(userId)
}

const getAllUsers = () => {
    return userDao.getAll()
}

const addUser = (details) => {
    return userDao.insert(details)
}

const updateUser = (userId,details) => {
    return userDao.update(userId,details)
}

const removeUser = (userId) => {
    return userDao.remove(userId)
}

export default {addUser,getUser,getAllUsers,updateUser,removeUser}