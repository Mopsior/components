import { Installation } from "@/features/installation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Installation> = {
    title: 'Installation',
    component: Installation,
}

export default meta
type Story = StoryObj<typeof Installation>


export const Default: Story = {
    name: 'Default',
}