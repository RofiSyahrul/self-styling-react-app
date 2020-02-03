import React from 'react';
import { contents } from '../constants';
import { Wrapper, Font } from './basic';
import TileOfContent from './TileOfContent';

const HighlightsPanel = () => (
  <Wrapper padding='48px 16px' dPadding='48px 28px'>
    <Wrapper width='100%' dWidth='720px'>
      <Font size='28.5px' align='center'>
        How Can I Help You?
      </Font>
      <Font size='20px' align='center' margin='0.5em 0 32px 0'>
        Our work then targeted, best practices outcomes social innovation
        synergy. Venture philanthropy, revolutionary inclusive policymaker
        relief. User-centered program areas scale.
      </Font>
    </Wrapper>
    <Wrapper direction='row' width='100%' wrap='wrap'>
      {contents.map((content, index) => (
        <TileOfContent key={index} {...content} />
      ))}
    </Wrapper>
  </Wrapper>
);

export default HighlightsPanel;
