import styled from "styled-components";

export type TsxComponentProps = {
  /**
   * Some thing
   */
  thing: "this" | "that";
}

export const TsxComponent = styled.div<TsxComponentProps>`
  color: green;
`;
