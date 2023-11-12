import * as yup from 'yup'

const MAX_LENGTH = {
    name: 20,
    city: 30,
    country: 30,
}

const MIN_LENGTH = {
    name: 1,
    city: 1,
    country: 1,
}

export const addUser = {
    schema: {
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email(),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
            })

        }
    }
}

export const updateUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required()
            })

        },
        body: {
            yupSchema: yup.object().shape({
                name: yup.string().min(MIN_LENGTH.name).max(MAX_LENGTH.name),
                email: yup.string().email(),
                city: yup.string().min(MIN_LENGTH.city).max(MAX_LENGTH.city),
                country: yup.string().min(MIN_LENGTH.country).max(MAX_LENGTH.country),
            })

        }
    }
}

export const getUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required()
            })

        }
    }
}

export const deleteUser = {
    schema: {
        params: {
            yupSchema: yup.object().shape({
                id: yup.number().required()
            })

        }
    }
}

