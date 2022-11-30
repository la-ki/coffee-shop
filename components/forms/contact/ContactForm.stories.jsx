import ContactForm from './ContactForm';
import { mockContactFormProps } from './ContactForm.mock';

const obj = {
  title: 'forms/ContactForm',
  component: ContactForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
}; //eslint-disable-line

export default obj;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContactForm {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockContactFormProps.base,
};
