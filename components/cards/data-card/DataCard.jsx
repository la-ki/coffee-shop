import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import PropType from 'prop-types';

const DataCard = ({ data, quantity }) => {
  return (
    <Card
      height="100%"
      sx={{
        backgroundColor: '#f2f2f2',
        mb: 2,
        p: 2,
        mx: { xs: 0, sm: 1 },
        width: { xs: '100%', sm: '44%', md: '100%', lg: '100%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Image src={data.image} alt="profile" width={200} height={200} />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { md: 20, xs: 16 },
              pt: { xs: 2 },
            }}
          >
            {data.name}
          </Typography>
          <Typography
            sx={{
              width: '100%',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { md: 20, xs: 16 },
            }}
          >
            x{quantity}
          </Typography>
          <Typography
            sx={{
              mt: { lg: 3, xs: 1 },
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            ${data.price} (per unit)
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

DataCard.propTypes = {
  product: PropType.shape({
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
  }),
  quantity: PropType.number,
};

export default DataCard;
