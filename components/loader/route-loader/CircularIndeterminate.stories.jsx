import CircularIndeterminate from './CircularIndeterminate';
import { mockCircularIndeterminateProps } from './CircularIndeterminate.mock';

const obj = {
  title: 'laoader/CircularIndeterminate',
  component: CircularIndeterminate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CircularIndeterminate {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCircularIndeterminateProps.base,
};
