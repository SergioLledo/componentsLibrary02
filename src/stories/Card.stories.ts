import { Story, Meta } from '@storybook/angular/types-6-0';
import Card from './card.component';

export default {
    title: 'Example/Card',
    component: Card,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<Card> = (args: Card) => ({
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
primary: true,
title: 'Esto es el titulo mod',
text: 'Esto es el contenido de la card mod'
};