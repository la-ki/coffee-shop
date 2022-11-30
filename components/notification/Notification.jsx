import { Alert, Snackbar } from '@mui/material';

const Notification = ({ handleCloseNotification, notification, open }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleCloseNotification}
    >
      <Alert
        onClose={handleCloseNotification}
        severity="success"
        sx={{ width: '100%', backgroundColor: 'green', color: 'white' }}
      >
        {notification}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
