import test from 'ava'

import userService from "../user.service";

let sampleUser;

test.beforeEach(()=>{
    sampleUser = {
        name: 'Joe Doe',
        email: 'joejoe@email.com',
        city: 'New York',
        country: 'USA'
    }
})

test('must add a user',(t)=>{
    const expectedId = 3
    const user = userService.addUser(sampleUser)

    t.is(user.id,expectedId)
    t.deepEqual(user,{id:expectedId,...sampleUser})
})

test('must retrieve a user',(t)=>{
    const expectedId = 3
    const user = userService.getUser(expectedId)

    t.is(user.id,expectedId)
})

test('must retrieve all users',(t)=>{
    const allUser = userService.getAllUsers()

    t.is(allUser.length,3)
})

test('must update a user',(t)=>{
    const expectedId = 3

    const updatedDetails = {
        name: 'Peere',
        email: 'peere@email.com',
        city: 'Adelaide',
        country: 'Australia'
    }
    const user = userService.updateUser(3, updatedDetails)

    t.is(user.id,expectedId)
    t.deepEqual(user,{id:expectedId,...updatedDetails})
})

test('must delete a user',(t)=>{
    const expectedId = 3

    const expected = userService.removeUser(expectedId)

    t.is(expected.id,expectedId)
    const user = userService.getUser(expectedId)
    t.is(user,undefined)
})