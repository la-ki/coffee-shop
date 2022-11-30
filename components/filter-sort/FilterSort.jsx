import { Box } from '@mui/system';
import ProductType from '../product-type/ProductType';
import Sort from '../sort/sort';

const FilterSort = ({
  sort,
  handleSortChange,
  productType,
  handleProductTypeChange,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center' },
        alignItems: { xs: 'center' },
      }}
    >
      <Sort sort={sort} handleSortChange={handleSortChange} />
      <ProductType
        productType={productType}
        handleProductTypeChange={handleProductTypeChange}
      />
    </Box>
  );
};

export default FilterSort;
