import RegisterForm from './RegisterForm';
import { mockRegisterFormProps } from './RegisterForm.mock';

const obj = {
  title: 'forms/RegisterForm',
  component: RegisterForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <RegisterForm {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockRegisterFormProps.base,
};
