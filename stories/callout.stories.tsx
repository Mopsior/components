import { Callout } from "@/components/custom/callout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Callout> = {
    title: 'Callout',
    component: Callout,
    argTypes: {
        children: {
            control: 'text',
            name: 'Content',
        },
        rounded: {
            name: 'Rounded',
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg', 'xl', 'full'],
                labels: {
                    sm: 'Small',
                    md: 'Medium',
                    lg: 'Large',
                    xl: 'Extra Large',
                    full: 'Full'
                }
            }
        },
        shadow: {
            name: 'Shadow',
            control: 'boolean'
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
                    important: 'Important'
                }
            }
        },
    }
}

export default meta
type Story = StoryObj<typeof Callout>

export const Tip: Story = {
    name: 'Tip',
    args: {
        children: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        rounded: 'md',
        shadow: true,
        variant: 'tip',
    }
}

export const Info: Story = {
    name: 'Info',
    args: {
        children: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        rounded: 'md',
        shadow: true,
        variant: 'info',
    }
}

export const Warning: Story = {
    name: 'Warning',
    args: {
        children: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        rounded: 'md',
        shadow: true,
        variant: 'warning',
    }
}

export const Important: Story = {
    name: 'Important',
    args: {
        children: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.",
        rounded: 'md',
        shadow: true,
        variant: 'important',
    }
}