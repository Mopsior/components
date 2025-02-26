import type { Preview } from "@storybook/react";
import '../app/globals.css'

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
  })]
};

export default preview;
