import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import PropType from 'prop-types';

const FilterSortComponent = ({
  sort,
  handleSortChange,
  filter,
  handleFilterChange,
}) => {
  return (
    <>
      <FormControl sx={{ flexGrow: 1 }}>
        <InputLabel id="sort-label">Sort</InputLabel>
        <Select
          label="Sort"
          labelId="sort-label"
          id="sort-select-helper"
          value={sort}
          onChange={handleSortChange}
        >
          <MenuItem value="asc">Name - A-Z</MenuItem>
          <MenuItem value="desc">Name - Z-A</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ flexGrow: 1 }}
        variant="outlined"
        label="Filter"
        placeholder="Filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
};

FilterSortComponent.propTypes = {
  sort: PropType.string,
  handleSortChange: PropType.func,
  filter: PropType.string,
  handleFilterChange: PropType.func,
};

export default FilterSortComponent;
