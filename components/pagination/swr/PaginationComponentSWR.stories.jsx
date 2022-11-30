import PaginationComponentSWR from './PaginationComponentSWR';
import { mockPaginationComponentSWRProps } from './PaginationComponentSWR.mock';

const obj = {
  title: 'pagination/PaginationComponentSWR',
  component: PaginationComponentSWR,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PaginationComponentSWR {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPaginationComponentSWRProps.base,
};
