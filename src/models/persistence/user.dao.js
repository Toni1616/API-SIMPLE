import users from '../data/users.data'

const insert = (details) => {
    const newUser = {id: users.length+1,...details}
    users.push(newUser)

    return newUser
}

const get = (userId) => {
    const findUser = users.find((user)=>{
        if(user.id === userId){
            return user
        }
        return null
    })
    return findUser
}

const remove = (userId) => {
    const deleteUser = (user,index) => {
        if(user.id === userId) {
            users.splice(index,1)
            return true
        }
        return false
    }

    return users.find(deleteUser)

}

const getAll = () => {
    return users
}

const update = (userID,newDetails) => {
    let existingUser = null
    let userIndex

    users.map((user,index) => {
        if(userID === user.id){
            existingUser = user
            userIndex = index
        }
    })

    if(!existingUser) {
        return false
    }

    const updatedUser = {
        ...existingUser,
        ...newDetails
    }

    users.splice(userIndex,1, updatedUser)
    return updatedUser
    // return true
}

export default {get,getAll,update,remove,insert}