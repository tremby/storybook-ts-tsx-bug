import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

type DecoratorFunction = Parameters<typeof addDecorator>[0];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
