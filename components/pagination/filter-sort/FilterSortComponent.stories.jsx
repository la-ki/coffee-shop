import FilterSortComponent from './FilterSortComponent';
import { mockFilterSortComponentProps } from './FilterSortComponent.mock';

const obj = {
  title: 'pagination/FilterSortComponent',
  component: FilterSortComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FilterSortComponent {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFilterSortComponentProps.base,
};
