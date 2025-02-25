import { FunAcceptTosLayout } from "@/components/layouts/fun-accept-tos";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FunAcceptTosLayout> = {
    title: 'FunAcceptTos',
    component: FunAcceptTosLayout,
}

export default meta
type Story = StoryObj<typeof FunAcceptTosLayout>

export const Default: Story = {
    name: 'Default',
}