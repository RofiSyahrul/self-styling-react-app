import React, { useState, useMemo } from 'react';
import { css } from 'styled-components';
import { useElementDimension } from '../hooks';
import { keyframeHeight } from '../keyframes';
import { colors } from '../constants';
import { Wrapper, Font, Button, Link } from './basic';

const NotificationPanel = () => {
  const [clicked, setClicked] = useState(false);
  const [{ height: notifPanelHeight }] = useElementDimension({
    id: 'notif-panel'
  });

  const animation = useMemo(
    () =>
      clicked
        ? css`
            ${keyframeHeight(notifPanelHeight)} 0.5s ease forwards
          `
        : null,
    [clicked, notifPanelHeight]
  );

  const handleClick = () => {
    setClicked(true);
    const container = document.getElementById('container');
    container.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper
      id='notif-panel'
      position='sticky'
      top='0'
      left='0'
      right='0'
      zIndex='20'
      width='100%'
      backgroundColor={colors.smokeGrey}
      animation={animation}
    >
      <Wrapper
        width='100%'
        maxWidth='720px'
        padding='16px 4px'
        dDirection='row'
        dJustify='center'
        dAlign='center'
        direction='column'
        justify='flex-start'
        align='flex-start'
        overflowY='hidden'
      >
        <Wrapper
          width='100%'
          dWidth='500px'
          padding='0 8px'
          boxSizing='border-box'
          overflowY='hidden'
        >
          <Font>
            By accessing and using this website, you acknowledge that you have
            read and understand our <Link>Cookie Policy</Link>,{' '}
            <Link>Privacy Policy</Link>, and our <Link>Terms of Service</Link>.
          </Font>
        </Wrapper>
        <Button
          padding='8px'
          margin='8px'
          fontSize='16px'
          onClick={handleClick}
          width='90px'
        >
          Got it
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export default NotificationPanel;
