import PaginationComponentRQ from './PaginationComponentRQ';
import { mockPaginationComponentQRProps } from './PaginationComponentRQ.mock';

const obj = {
  title: 'pagination/PaginationComponentRQ',
  component: PaginationComponentRQ,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PaginationComponentRQ {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPaginationComponentQRProps.base,
};
