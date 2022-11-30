const Product = require('../../../models/product');
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET': {
      try {
        const productId = req.query.productId;

        const product = await Product.findOne({ customID: productId });

        if (!product) {
          throw new Error('The product with this id does not exist!');
        }

        const similarProducts = await Product.find({
          category: product.category,
          customID: { $ne: product.customID },
        });

        const shuffled = similarProducts
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        res.status(200).json({
          message: 'The product you requested was fetched successfully.',
          product,
          similarProducts: shuffled,
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
