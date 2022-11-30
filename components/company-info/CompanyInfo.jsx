import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
const CompanyInfo = () => {
  const { t } = useTranslation('home');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          backgroundColor: 'primary.main',
          height: '100%',
          paddingTop: '64px',
          paddingBottom: '62px',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: { xs: '60px', md: '0px' },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '32px', md: '38px', lg: '48px' },
              textAlign: 'center',
              width: '100%',
              color: 'white',
            }}
          >
            {t('home:infoTitle')}
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              height: 60,
              textAlign: 'center',
            }}
          >
            <Image src="/images/pin.svg" alt="map" width={50} height={50} />
            <Typography
              sx={{
                color: 'white',
                pt: 2,
                pl: 2,
              }}
            >
              {t('home:address')}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              height: 60,
            }}
          >
            <Image src="/images/clock.svg" alt="map" width={50} height={50} />
            <Typography
              sx={{
                color: 'white',
                pt: 2,
                pl: 2,
                mr: -4,
              }}
            >
              {t('home:open')}
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              height: 60,
            }}
          >
            <Image src="/images/mail.svg" alt="map" width={50} height={50} />
            <Typography
              sx={{
                color: 'white',
                pt: 2,
                pl: 2,
                mr: -3,
              }}
            >
              {t('home:mail')}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: { xs: '100%', lg: '50%' } }}
        >
          <Box>
            <Image src="/images/maps.svg" alt="map" width={1280} height={720} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CompanyInfo;
