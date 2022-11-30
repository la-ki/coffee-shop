import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'next-i18next';

const Sort = ({ sort, handleSortChange }) => {
  const { t } = useTranslation('products');
  return (
    <>
      <FormControl
        sx={{
          width: '200px',
          mb: { xs: '10px', sm: '0px' },
          mr: { sm: '10px' },
        }}
      >
        <InputLabel id="sort-label">{t('products:sort')}</InputLabel>
        <Select
          MenuProps={{
            disableScrollLock: true,
          }}
          label={t('products:sort')}
          labelId="sort-label"
          id="sort-select-helper"
          value={sort}
          onChange={handleSortChange}
        >
          <MenuItem value="asc">{t('products:asc')}</MenuItem>
          <MenuItem value="desc">{t('products:desc')}</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Sort;
