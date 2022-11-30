import ForgotPasswordForm from './ForgotPasswordForm';
import { mockForgotPasswordFormProps } from './ForgotPasswordForm.mock';

const obj = {
  title: 'forms/ForgotPasswordForm',
  component: ForgotPasswordForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ForgotPasswordForm {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockForgotPasswordFormProps.base,
};
