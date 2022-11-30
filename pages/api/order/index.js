const Order = require('../../../models/order');
import dbConnect from '../../../utils/helpers/dbHelpers';
const mongoose = require('mongoose');

async function handler(req, res) {
  const { method } = req;
  const ownerID = req.query.ownerID;
  await dbConnect();

  switch (method) {
    case 'POST': {
      try {
        const order = await Order.create(
          req.body
        ); /* create a new model in the database */
        res
          .status(201)
          .json({ message: 'Your order was submitted successfully!', order });
      } catch (error) {
        res.status(400).json({ message: error });
      }
      break;
    }
    case 'GET': {
      try {
        const objectId = mongoose.Types.ObjectId(ownerID);
        const orders = await Order.find({ owner: objectId });
        if (!orders) {
          res.status(200).json({
            message:
              'There are currently no orders in our database for the selected owner.',
            orders: [],
          });
        }

        res.status(200).json({
          message:
            'All orders from our database for the selected owner were fetched successfully.',
          orders,
        });
      } catch (error) {
        res.status(400).json({ message: error });
      }
      break;
    }
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

export default handler;
