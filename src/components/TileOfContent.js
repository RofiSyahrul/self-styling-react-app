import React from 'react';
import { GridWrapper, Wrapper, Font, IconWrapper } from './basic';

const TileOfContent = ({ title, description, icon }) => (
  <GridWrapper
    sm={12}
    md={6}
    lg={4}
    gridHeight={{ sm: '230px', md: '270px', lg: '200px' }}
  >
    <Wrapper
      justify='flex-start'
      margin='16px'
      padding='16px'
      border='0.5px solid #7f7f7f'
      shadow='inset 0 0 3px #7f7f7f'
      height='100%'
    >
      <Wrapper direction='row' justify='space-between' width='100%'>
        <Font size='25px'>{title}</Font>
        <IconWrapper className={icon} size='25px' color='#7f7f7f' />
      </Wrapper>
      <Wrapper width='100%' padding='16px 0' boxSizing='border-box'>
        <Font>{description}</Font>
      </Wrapper>
    </Wrapper>
  </GridWrapper>
);

export default TileOfContent;
