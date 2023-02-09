import { Story, Meta } from '@storybook/angular/types-6-0';
import { componentWrapperDecorator} from '@storybook/angular';
import Button from './button.component';

export default {
  title: 'Design System/Elements/Button',
  component: Button,
  argTypes: {
  },
  decorators: [componentWrapperDecorator((story) => `
  <div style="margin: 3em">
  ${story}
  </div>
  
  `)],
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'btn-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'btn-secondary',
};

export const Link = Template.bind({});
Link.args = {
  label: 'btn-link',
  disabled: true,
};


