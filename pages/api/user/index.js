const User = require('../../../models/user');
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'PATCH': {
      console.log(req.body);
      const updates = Object.keys(req.body.userData);
      const allowedUpdates = [
        'fullName',
        'email',
        'address',
        'address2',
        'city',
        'country',
        'postcode',
      ];
      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );

      if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
      }

      try {
        const user = await User.findOne({ _id: req.body._id });
        updates.forEach((update) => (user[update] = req.body.userData[update]));
        await user.save();
        res.send({
          user,
          message: 'User profile updated successfully.',
        });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    }
  }
}

export default handler;
