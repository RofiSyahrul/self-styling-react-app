import React from 'react';
import { colors, myName } from '../constants';
import { Wrapper, Font } from './basic';

const Footer = () => (
  <Wrapper
    width='100%'
    padding='16px'
    boxSizing='border-box'
    backgroundColor={colors.darkBlue}
  >
    <Font color='white' align='center'>
      &copy; {new Date().getFullYear()} {myName}. All rights reserved.
    </Font>
  </Wrapper>
);

export default Footer;
