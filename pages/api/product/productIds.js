const Product = require('../../../models/product');
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET': {
      try {
        const productCount = await Product.countDocuments();

        if (productCount === 0) {
          res.status(200).json({
            message: 'There are currently no products in our database.',
            productIds: [],
          });
          break;
        }

        const product = await Product.find({}).limit(4);

        if (!product) {
          throw new Error('There are currently no products in our database.');
        }

        const productIds = product.map((item) => item.customID);

        res.status(200).json({
          message: 'Ids for a handful of products were fetched successfully.',
          productIds,
        });
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
