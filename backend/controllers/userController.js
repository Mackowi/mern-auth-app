import asyncHandler from 'express-async-handler';

// desc:   auth user -> set token
// route:  POST /api/users/auth
// access  public
const authUser = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Auth User Controller' });
});

export { authUser };
