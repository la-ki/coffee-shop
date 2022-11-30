import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropType from 'prop-types';

const DataDetailsCard = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        height: 200,
        marginX: 'auto',
        marginY: 20,
        boxShadow: 10,
        display: 'flex',
      }}
    >
      <Image
        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
        alt="profile picture"
        width={600}
        height={500}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center',
            marginTop: 1,
            marginBottom: 3,
          }}
        >
          {data.name}, {data.age}
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

DataDetailsCard.propTypes = {
  data: PropType.shape({
    name: PropType.string,
    gender: PropType.string,
  }),
};

export default DataDetailsCard;
