import React from 'react';
import { colors, myName, myPhone } from '../constants';
import { Wrapper, BackgroundWrapper, Font, Button } from './basic';

const Header = () => (
  <BackgroundWrapper
    position='relative'
    src={require('../images/hero-shot-bg.jpg')}
    height='500px'
    dHeight='600px'
    width='100%'
  >
    <Wrapper
      backgroundColor={colors.darkBlueOpacity}
      position='absolute'
      left='0'
      top='0'
      height='100%'
      width='100%'
      align='flex-start'
      justify='flex-start'
    >
      <Wrapper dPadding='28px' padding='16px'>
        <img
          src={require('../images/y-logo-white.png')}
          alt='Y Logo'
          width='50px'
        />
      </Wrapper>
    </Wrapper>
    <Wrapper zIndex='10' width='100%' padding='16px' boxSizing='border-box'>
      <Font color='white' align='center' size='27px' margin='0 0.25em'>
        {`​Hello! I’m ${myName}`}
      </Font>
      <Font
        color='white'
        align='center'
        size='25px'
        weight='bold'
        margin='0.1em 0.25em 0.25em 0.25em'
      >
        Consult, Design, and Develop Websites
      </Font>
      <Font color='white' align='center' dSize='17px' size='21px'>
        Have something great in mind? Feel free to contact me.
        <br />
        I'll help you to make it happen.
      </Font>
      <Button
        textTransform='uppercase'
        margin='1em'
        padding='16px'
        dFontSize='18px'
        fontSize='20px'
        fontWeight='bold'
        variant='outline'
        hover={{ filter: 'none', color: colors.blue }}
        onClick={() => (window.location.href = `tel:${myPhone}`)}
      >
        Let's Make Contact
      </Button>
    </Wrapper>
  </BackgroundWrapper>
);

export default Header;
