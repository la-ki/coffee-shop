import { Box } from '@mui/system';
import Image from 'next/image';
import PropType from 'prop-types';

const ProductImage = ({ image }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: { xs: '100%', md: '50%' },
        height: '100%',
        justifyContent: { xs: 'center' },
      }}
    >
      <Image src={image} alt="profile" width={500} height={500} />
    </Box>
  );
};

ProductImage.propTypes = {
  image: PropType.string,
};
export default ProductImage;
