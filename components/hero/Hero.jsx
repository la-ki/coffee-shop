import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { PRODUCTS_PAGE } from '../../constants/pages';

const Hero = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          height: { xs: '100vh', md: '1024px' },
        }}
      >
        <Box
          sx={{
            minWidth: '50%',
            width: { xs: '100%', md: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'space-around', md: 'center' },
            backgroundColor: 'primary.light',
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '96px', md: '64px', lg: '96px' },
                ml: 10,
                color: 'white',
                fontFamily: ['Indie Flower', 'cursive'].join(','),
              }}
            >
              {t('home:mainTitle1')}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '96px', md: '64px', lg: '96px' },
                ml: 10,
                color: 'white',
                fontFamily: ['Indie Flower', 'cursive'].join(','),
              }}
            >
              {t('home:mainTitle2')}
            </Typography>
          </Box>
          <Typography
            display="flex"
            justifyItems="center"
            sx={{
              fontSize: { xs: '22px', md: '18px' },
              ml: 10,
              mt: { md: '50px' },
              color: 'white',
              pr: '20%',
            }}
          >
            {t('home:description')}
          </Typography>
          <Box
            sx={{
              mt: { md: '50px' },
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              ml: { md: 10 },
              justifyContent: { sm: 'space-evenly', md: 'flex-start' },
              alignItems: { xs: 'center' },
            }}
          >
            <Button
              disableRipple
              sx={{
                backgroundColor: '#CBA213',
                mr: { md: 4 },
                height: 50,
                width: 150,
                textTransform: 'none',

                color: 'white',
              }}
              onClick={() => router.push(PRODUCTS_PAGE)}
            >
              {t('home:exploreBtn')}
            </Button>
            <Button
              disableRipple
              sx={{
                display: { xs: 'none', sm: 'flex' },
                textTransform: 'none',
                color: 'white',
              }}
              startIcon={
                <Image
                  src="/images/Play.svg"
                  alt="profile"
                  width={50}
                  height={50}
                />
              }
            >
              {t('home:howTo')}
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            backgroundColor: 'white',
          }}
        >
          <Box
            sx={{ ml: { md: -12 } }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/images/Hero-Image.png"
              alt="profile"
              width={818}
              height={796}
              priority
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
