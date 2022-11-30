import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropType from 'prop-types';

const ProfileCard = ({ profileData }) => {
  return (
    <Card sx={{ maxWidth: 345, marginX: 'auto', marginY: 10, boxShadow: 10 }}>
      <Image
        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="profile picture"
        width={600}
        height={500}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profileData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          quis odio in libero fringilla pellentesque aliquet et mi. Quisque
          maximus lectus a neque luctus, tempus auctor ipsum ultrices.
        </Typography>
      </CardContent>
    </Card>
  );
};

ProfileCard.propTypes = {
  profileData: PropType.shape({
    name: PropType.string,
  }),
};

export default ProfileCard;
