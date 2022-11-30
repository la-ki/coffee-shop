import { Box } from '@mui/system';
import PropType from 'prop-types';
import FeaturedProduct from '../featured-product/FeaturedProduct';

const FeaturedProductsList = ({ featuredProducts }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {featuredProducts.map((product, i) => {
        return (
          <FeaturedProduct
            key={i}
            product={product}
            bColor={i % 2 === 0 ? 'dark' : 'light'}
            side={i % 2 === 0 ? 'left' : 'right'}
          ></FeaturedProduct>
        );
      })}
    </Box>
  );
};

FeaturedProduct.propTypes = {
  featuredProducts: PropType.arrayOf(
    PropType.shape({
      category: PropType.string,
      name: PropType.string,
      image: PropType.string,
      description: PropType.string,
      place: PropType.string,
      people: PropType.string,
      process: PropType.string,
      pairing: PropType.string,
      available: PropType.Boolean,
      isFeatured: PropType.Boolean,
      price: PropType.number,
      customID: PropType.string,
    })
  ),
};

export default FeaturedProductsList;
