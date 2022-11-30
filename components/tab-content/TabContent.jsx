import { Button, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import TabPanel from '../tab-panel/TabPanel';

const TabContent = ({
  description,
  inCart,
  price,
  category,
  addProductToCart,
}) => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation('products');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Grid item xs={12} md={6}>
      <Tabs
        sx={{
          '& button:focus': {
            borderTop: '1px solid black',
            borderLeft: '1px solid black',
            borderRight: '1px solid black',
            borderRadius: '5px 5px 0 0',
            borderBottom: 'none',
          },
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          sx={{
            width: '50%',
          }}
          label={t('products:purchase')}
          {...a11yProps(0)}
        />
        <Tab
          sx={{ width: '50%' }}
          label={t('products:category')}
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box flexGrow={2} sx={{ pb: { xs: '70px' } }}>
          <Typography>{description}</Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex' },
            flexDirection: { xs: 'column' },
            justifyContent: { xs: 'center' },
            alignItems: { xs: 'center', md: 'flex-end' },
          }}
        >
          <Typography mb={2}>${price}</Typography>
          <Button
            disabled={inCart}
            onClick={() => addProductToCart(1)}
            sx={{
              backgroundColor: '#CBA213',
              height: 50,
              width: { xs: '300px', md: '150px' },
              color: 'white',
            }}
          >
            {inCart ? t('products:in') : t('products:add')}
          </Button>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ mb: { xs: '60px' } }}>{category}</Box>
      </TabPanel>{' '}
    </Grid>
  );
};

export default TabContent;
