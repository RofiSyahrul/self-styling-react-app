import styled from 'styled-components';
import { colors } from '../constants';

const BasicWrapper = styled.div`
  display: ${({ display = 'flex' }) => display};
  align-self: ${({ alignSelf }) => alignSelf || null};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  flex-direction: ${({ direction = 'column' }) => direction};
  flex-wrap: ${({ wrap }) => wrap || null};
  width: ${({ width }) => width || null};
  height: ${({ height }) => height || null};
  max-height: ${({ maxHeight }) => maxHeight || null};
  box-sizing: ${({ boxSizing }) => boxSizing || null};
  background-color: ${({ backgroundColor }) => backgroundColor || null};
  overflow-y: ${({ overflowY = 'auto' }) => overflowY};
  overflow-x: ${({ overflowX }) => overflowX || null};
  position: ${({ position = 'static' }) => position};
  top: ${({ top }) => top || null};
  right: ${({ right }) => right || null};
  bottom: ${({ bottom }) => bottom || null};
  left: ${({ left }) => left || null};
  z-index: ${({ zIndex }) => zIndex || null};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  border: ${({ border }) => border || null};
  border-radius: ${({ radius = '0' }) => radius};
  box-shadow: ${({ shadow }) => shadow || null};
  animation: ${({ animation }) => animation || null};
  transform: ${({ transform }) => transform || null};
  transition: ${({ transition }) => transition || null};
`;

export const Wrapper = styled(BasicWrapper)`
  @media all and (min-width: 720px) {
    max-width: ${({ maxWidth }) => maxWidth || null};
    width: ${({ dWidth, width }) => dWidth || width || null};
    height: ${({ dHeight, height }) => dHeight || height || null};
    margin: ${({ dMargin, margin }) => dMargin || margin || null};
    padding: ${({ dPadding, padding }) => dPadding || padding || null};
    align-items: ${({ dAlign, align }) => dAlign || align || 'center'};
    justify-content: ${({ dJustify, justify }) =>
      dJustify || justify || 'center'};
    flex-direction: ${({ dDirection, direction }) =>
      dDirection || direction || 'column'};
  }
`;

export const BackgroundWrapper = styled(BasicWrapper)`
  background: ${({ src }) =>
    src ? `url(${src}) no-repeat center/contain` : null};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media all and (min-width: 720px) {
    max-width: ${({ maxWidth }) => maxWidth || null};
    width: ${({ dWidth, width }) => dWidth || width || null};
    height: ${({ dHeight, height }) => dHeight || height || null};
    margin: ${({ dMargin, margin }) => dMargin || margin || null};
    padding: ${({ dPadding, padding }) => dPadding || padding || null};
    align-items: ${({ dAlign, align }) => dAlign || align || 'center'};
    justify-content: ${({ dJustify, justify }) =>
      dJustify || justify || 'center'};
    flex-direction: ${({ dDirection, direction }) =>
      dDirection || direction || 'column'};
  }
`;

export const GridWrapper = styled(BasicWrapper)`
  ${({ sm, gridHeight }) => {
    if (typeof sm === 'number') {
      return `
        @media all and (max-width: 480px) {
          width: ${(sm * 100) / 12}%;
          height: ${gridHeight.sm || null};
        }
      `;
    }
    return null;
  }}
  ${({ md, gridHeight }) => {
    if (typeof md === 'number') {
      return `
        @media all and (min-width: 480.5px) and (max-width: 960px) {
          width: ${(md * 100) / 12}%;
          height: ${gridHeight.md || null};
        }
      `;
    }
    return null;
  }}
  ${({ lg, gridHeight }) => {
    if (typeof lg === 'number') {
      return `
        @media all and (min-width: 960.5px) {
          width: ${(lg * 100) / 12}%;
          height: ${gridHeight.lg || null};
        }
      `;
    }
    return null;
  }}
`;

export const Font = styled.p`
  text-align: ${({ align = 'left' }) => align};
  color: ${({ color = 'black' }) => color};
  font-size: ${({ size = '14px' }) => size};
  font-family: ${({ fontFamily = 'sans-serif' }) => fontFamily};
  font-weight: ${({ weight = 'normal' }) => weight};
  margin: ${({ margin = '0' }) => margin};
  line-height: ${({ lineHeight = '1.3em' }) => lineHeight};
  width: ${({ width }) => width || null};
  z-index: ${({ zIndex }) => zIndex || null};
  @media all and (min-width: 720px) {
    font-size: ${({ dSize, size }) => dSize || size || '14px'};
  }
`;

export const IconWrapper = styled.i`
  color: ${({ color = 'black' }) => color};
  font-size: ${({ size = '14px' }) => size};
  z-index: ${({ zIndex }) => zIndex || null};
`;

export const Button = styled.button`
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  text-align: ${({ align = 'center' }) => align};
  font-family: ${({ fontFamily = 'sans-serif' }) => fontFamily};
  font-size: ${({ fontSize = '14px' }) => fontSize};
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform || null};
  width: ${({ width }) => width || null};
  z-index: ${({ zIndex }) => zIndex || null};
  ${({ variant = 'contain', color, borderSize, radius, background }) => {
    switch (variant) {
      case 'outline':
        return `
          color: ${color || 'white'};
          border: ${borderSize || '1px'} ${color || 'white'} solid;
          background: transparent;
          border-radius: ${radius || '4px'};
        `;
      default:
        return `
          color: ${color || 'white'};
          background: ${background || colors.blue};
          border-radius: ${radius || '4px'};
          border: ${borderSize || '1px'} ${background || colors.blue} solid;
        `;
    }
  }}
  &:hover {
    ${({ hover, radius, borderSize }) => {
      if (hover) {
        return `
          background: ${hover.background || 'white'};
          color: ${hover.color || 'black'};
          border: ${borderSize || '1px'} ${hover.background || 'white'} solid;
          border-radius: ${radius || '4px'};
          filter: ${hover.filter || 'brightness(0.8)'};
          cursor: pointer;
        `;
      }
      return `
        filter: brightness(0.8);
        cursor: pointer;
      `;
    }}
  }
  @media all and (min-width: 720px) {
    font-size: ${({ fontSize, dFontSize }) => dFontSize || fontSize || '14px'};
    width: ${({ dWidth, width }) => dWidth || width || null};
  }
`;

export const Link = styled.span`
  color: ${({ color = colors.blue }) => color};
  font-size: ${({ size = 'inherit' }) => size};
  font-family: ${({ fontFamily = 'sans-serif' }) => fontFamily};
  font-weight: ${({ weight = 'normal' }) => weight};
  margin: ${({ margin = '0' }) => margin};
  line-height: ${({ lineHeight = '1.3em' }) => lineHeight};
  z-index: ${({ zIndex }) => zIndex || null};
  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
  @media all and (min-width: 720px) {
    font-size: ${({ dSize, size }) => dSize || size || 'inherit'};
  }
`;

export const Input = styled.input`
  width: ${({ width }) => width || null};
  padding: ${({ padding }) => padding || null};
  margin: ${({ margin }) => margin || null};
  @media all and (min-width: 720px) {
    width: ${({ dWidth, width }) => dWidth || width || null};
  }
`;
