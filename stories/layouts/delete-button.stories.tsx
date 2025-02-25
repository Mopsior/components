import { DeleteButtonLayout } from "@/components/layouts/delete-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DeleteButtonLayout> = {
    title: 'DeleteButton',
    component: DeleteButtonLayout,
}

export default meta
type Story = StoryObj<typeof DeleteButtonLayout>

export const Default: Story = {
    name: 'Default',
}