// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Comp01 from './comp01.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Comp',
  component: Comp01,
  argTypes: {
  },
} as Meta;


const Template: Story<Comp01> = (args: Comp01) => ({
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

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
