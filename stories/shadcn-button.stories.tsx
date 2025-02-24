import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: 'Shadcn Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
            name: 'Content',
        },
        size: {
            name: 'Size',
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
        }
    }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    name: 'Primary',
    args: {
        children: "Copy code",
        asChild: false,
        size: 'default',
    }
}