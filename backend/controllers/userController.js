import asyncHandler from "express-async-handler";
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// @desc Auth user & get token
// route POST/api/users/login
// @access Public
const authUser = asyncHandler(async (req, res, next) => {
  const {email,password} = req.body;

  const user = await User.findOne({email});

  if (user && (await user.matchPassword(password))){
    const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn:'30d'})

    // Set Jwt as Http Only cookie

    res.cookie('jwt', token,{
      httpOnly:true,
      secure:process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 *60 * 1000
    }
    )

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    })
  }else{
    res.json(401);
    // throw new Error('Invalid email or Password')
  }
  })

// @desc Register user
// route POST/api/users
// @access Public
const registerUser = asyncHandler(async (req, res, next) => {
    res.send('register user')
  })

// @desc Logout user/ clear cookie
// route POST/api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res, next) => {
    res.send('logout user')
  })

// @desc Get user profile
// route GET/api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res, next) => {
    res.send('get user profile')
  })

// @desc UPDATE user profile
// route put/api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res, next) => {
    res.send('update user profile')
  })

// @desc GET Users
// route get/api/users
// @access private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
    res.send('get users')
  })

// @desc GET User by Id
// route get/api/users/:id
// @access private/Admin
const getUserById = asyncHandler(async (req, res, next) => {
    res.send('get user by id')
  })

// @desc DELETE Users
// route delete/api/users/:id
// @access private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
    res.send('delete user')
  })

// @desc UPDATE Users
// route PUT/api/users/:id
// @access private/Admin
const updateUser = asyncHandler(async (req, res, next) => {
    res.send('update user')
  })

export {
    authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser
}
