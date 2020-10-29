import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { TsxComponent, TsxComponentProps } from "./tsx-component";

export default {
  title: "TsxComponent",
  component: TsxComponent,
} as Meta;

const Template: Story<TsxComponentProps> = (props) => (
  <TsxComponent {...props}>
    <p>Lorem ipsum dolor sit amet</p>
  </TsxComponent>
);

export const Default = Template.bind({});
Default.args = { thing: "that" };
