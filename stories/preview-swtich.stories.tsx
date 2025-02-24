import { PreviewSwitch } from "@/features/preview-switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PreviewSwitch> = {
    title: 'PreviewSwitch',
    component: PreviewSwitch,
}

export default meta
type Story = StoryObj<typeof PreviewSwitch>


export const Important: Story = {
    name: 'Default',
}