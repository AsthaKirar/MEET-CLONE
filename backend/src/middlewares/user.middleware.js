import { body } from "express-validator";

export const registerUserValidation = [
    body('username')
    .isString()
    .withMessage('username must be a string')
    .isLength({min:3, max:15})
    .withMessage('usernname must be between 3 and 15 characters')
    .custom((value) => value === value.toLowerCase())
    .withMessage('username must be lowercase'),
    body('email')
    .isEmail()
    .withMessage('Email must be a valid email'),

    body('password')
    .isString()
    .withMessage('password must be string')
    .isLength({min: 6 })
    .withMessage('password must be alteat 6 character'),

]


export const loginUserValidation =[
    
    body('email')
    .isEmail()
    .withMessage('Email must be a valid email'),

    body('password')
    .isString()
    .withMessage('password must be string')
    .isLength({min: 6 })
    .withMessage('password must be alteat 6 character'),


]
