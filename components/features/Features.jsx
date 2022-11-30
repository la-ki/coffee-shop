import { Container, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import FeatureItem from './FeatureItem';
import items from './items';

const Features = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',

          height: {
            xs: '100%',
            sm: '100%',
          },
          flexDirection: 'column',
          paddingBottom: '50px',
        }}
      >
        <Container
          sx={{
            width: '100%',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '36px', sm: '48px', md: '64px', lg: '86px' },
              color: 'primary.main',
              textAlign: 'center',
              mt: 5,
              fontFamily: ['Indie Flower', 'cursive'].join(','),
            }}
          >
            {t('home:coffeeTitle')}
          </Typography>
        </Container>
        <Container
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Divider sx={{ width: { xs: '100px', sm: '200px' }, mr: 4 }} />

            <Image
              src="/images/coffee-beans-icon.svg"
              alt="profile"
              width={50}
              height={50}
            />
            <Divider sx={{ width: { xs: '100px', sm: '200px' }, ml: 4 }} />
          </Box>
        </Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            width: '100%',
            height: '100%',
          }}
        >
          {items.map((item) => (
            <FeatureItem
              key={item.id}
              image={item.image}
              alt={item.alt}
              description={item.description}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Features;
