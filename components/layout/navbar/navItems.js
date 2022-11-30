import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {
  BASE_PAGE,
  CONTACT_PAGE,
  PRODUCTS_PAGE,
} from '../../../constants/pages';

export const items = [
  {
    id: 1,
    name: 'Home',
    url: BASE_PAGE,
    icon: <HomeIcon sx={{ color: '#664c47' }}></HomeIcon>,
  },
  {
    id: 2,
    name: 'Store',
    url: PRODUCTS_PAGE,
    icon: <LocalMallIcon sx={{ color: '#664c47' }}></LocalMallIcon>,
  },
  {
    id: 3,
    name: 'Contact',
    url: CONTACT_PAGE,
    icon: <ContactSupportIcon sx={{ color: '#664c47' }}></ContactSupportIcon>,
  },
];
