import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import PropType from 'prop-types';
import ContactForm from '../../forms/contact/ContactForm';
import ShippingDetailsForm from '../../forms/shipping-details/ShippingDetailsForm';

const ShippingModal = ({
  open,
  handleClose,
  handleChangeShipping,
  handleChangeContact,
}) => {
  return (
    <Modal
      open={open.isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: { xs: '90%', md: '50%' },
          top: '50%',
          left: '50%',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {open.type === 'Shipping' && (
          <ShippingDetailsForm submitHandler={handleChangeShipping} />
        )}
        {open.type === 'Contact' && (
          <ContactForm submitHandler={handleChangeContact} />
        )}
      </Box>
    </Modal>
  );
};

ShippingModal.propTypes = {
  open: PropType.object,
  handleClose: PropType.func,
  handleChangeShipping: PropType.func,
  handleChangeContact: PropType.func,
};

export default ShippingModal;
