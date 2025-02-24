import type { Meta, StoryObj } from '@storybook/react';
import { CalloutIcon } from '@/components/custom/callout'

const meta: Meta<typeof CalloutIcon> = {
    title: 'CalloutIcon',
    component: CalloutIcon,
    argTypes: {
        children: {
            control: 'text',
            name: 'Content',
        },
        variant: {
            name: 'Variant',
            control: {
                type: 'select',
                options: ['tip', 'info', 'warning', 'important'],
                labels: {
                    tip: 'Tip',
                    info: 'Info',
                    warning: 'Warning',
                    important: 'Important',
                },
            },
        },
        highlight: {
            name: 'Highlight',
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof CalloutIcon>;

export const Tip: Story = {
    name: 'Tip',
    args: {
        children: '🚀',
        variant: 'tip',
        highlight: true,
    },
};