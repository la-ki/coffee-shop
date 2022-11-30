import { Container, Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const FeatureItem = ({ image, alt, description }) => {
  const { t } = useTranslation('home');
  return (
    <Container
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: { xs: '50px' },
      }}
    >
      <Image src={image} alt={alt} width={100} height={100} />
      <Typography
        sx={{
          mt: 6,
          px: 6,
        }}
      >
        {t(description)}
      </Typography>
    </Container>
  );
};

export default FeatureItem;
