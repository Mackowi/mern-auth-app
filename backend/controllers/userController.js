import asyncHandler from 'express-async-handler';

// desc:   auth user -> set token
// route:  POST /api/users/auth
// access  public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User Controller' });
});

// desc:   register new user
// route:  POST /api/users
// access  public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Register User Controller' });
});

// desc:   logout user
// route:  POST /api/users/logout
// access  public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User Controller' });
});

// desc:   get user profile
// route:  GET /api/users/profile
// access  private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Profile Controller' });
});

// desc:   update user profile
// route:  PUT /api/users/profile
// access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update User Profile Controller' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
