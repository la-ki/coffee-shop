const Product = require('../../../models/product');
import dbConnect from '../../../utils/helpers/dbHelpers';

async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  const pageIndex = req.query.pageIndex;
  const category = req.query.category === 'All' ? '' : req.query.category;
  const filterType = req.query.filterType;

  if (pageIndex < 1) {
    res.status(422).json({
      message: 'Page does not exist ',
    });
    return;
  }

  switch (method) {
    case 'GET': {
      try {
        const productCount = await Product.find({
          category: { $regex: category },
        }).countDocuments();

        if (productCount === 0) {
          res.status(200).json({
            message: 'There are currently no products in our database.',
            product: [],
            productCount: 0,
            next: null,
            previous: null,
          });
          break;
        }

        if ((pageIndex - 1) * 9 >= productCount) {
          throw new Error('Page does not exist!');
        }

        const product = await Product.find({ category: { $regex: category } })
          .skip((pageIndex - 1) * 9)
          .limit(9)
          .sort(filterType === 'asc' ? 'name' : '-name ');

        if (!product) {
          throw new Error('There are currently no products in our database.');
        }

        const previousUrl =
          pageIndex > 1
            ? `https://localhost:3000/api/product?pageIndex=${
                parseInt(pageIndex) - 1
              }`
            : null;
        const nextUrl =
          pageIndex * 9 < productCount
            ? `https://localhost:3000/api/product?pageIndex=${
                parseInt(pageIndex) + 1
              }`
            : null;

        res.status(200).json({
          message: 'All products from our database were fetched successfully.',
          product,
          productCount,
          next: nextUrl,
          previous: previousUrl,
        });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
      break;
    }
    case 'POST': {
      try {
        const product = await Product.create(req.body);
        res
          .status(201)
          .json({ message: 'Your product was created and stored!', product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    default:
      res.status(405).json({ message: 'Method not allowed' });
      break;
  }
}

export default handler;
