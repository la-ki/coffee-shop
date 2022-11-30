import User from '../../../models/user';
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST': {
      try {
        const user = await User.create(req.body);
        res
          .status(201)
          .json({ message: `User (${user.fullName}) created sucessfully!` });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    }
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

export default handler;
