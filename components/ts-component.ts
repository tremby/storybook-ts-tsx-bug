import styled from "styled-components";

export type TsComponentProps = {
  /**
   * Some thing
   */
  thing: "this" | "that";
}

export const TsComponent = styled.div<TsComponentProps>`
  color: red;
`;
