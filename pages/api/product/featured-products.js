const Product = require('../../../models/product');
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET': {
      try {
        const featuredProducts = await Product.find({ isFeatured: true });

        if (!featuredProducts) {
          res.status(200).json({
            message: 'There are no featured products right now.',
            featuredProducts: [],
          });
        }

        res.status(200).json({
          message: 'Featured products were fetched successfully.',
          featuredProducts,
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
