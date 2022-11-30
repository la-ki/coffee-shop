import HoverImageCard from './HoverImageCard';
import { mockHoverImageCardProps } from './ProfileCard.mock';

const obj = {
  title: 'cards/HoverImageCard',
  component: HoverImageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <HoverImageCard {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHoverImageCardProps.base,
};
