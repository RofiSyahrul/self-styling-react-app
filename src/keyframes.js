import { keyframes } from 'styled-components';

export const keyframeHeight = height => keyframes`
  from {
    height: ${height}px;
  }
  to {
    height: 0px;
  }
`;

export const keyframeAppear = keyframes`
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
`;