import styled from "styled-components";
import { device } from "../../utils/breakPoints";

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media ${device.mobile} {
    max-width: 540px;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.desktop} {
    max-width: 960px;
  }
  @media ${device.large} {
    max-width: 1140px;
  }
`;

