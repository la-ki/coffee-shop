import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'next-i18next';

const ProductType = ({ productType, handleProductTypeChange }) => {
  const { t } = useTranslation('products');
  return (
    <>
      <FormControl sx={{ width: '200px' }}>
        <InputLabel id="product-type-label">{t('products:type')}</InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          label={t('products:type')}
          labelId="product-type-label"
          id="product-type-label"
          value={productType}
          onChange={handleProductTypeChange}
        >
          <MenuItem value="All">{t('products:all')}</MenuItem>
          <MenuItem value="Coffee">{t('products:coffee')}</MenuItem>
          <MenuItem value="Mug">{t('products:mug')}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ProductType;
