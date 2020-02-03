/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { css } from 'styled-components';
import { keyframeAppear } from '../keyframes';
import { colors } from '../constants';
import { Wrapper, Font, Button, Link, IconWrapper, Input } from './basic';

const NewsletterPanel = () => {
  const [closed, setClosed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [countOneThirdScroll, setCountOneThirdScroll] = useState(0);

  const [style, setStyle] = useState({
    animation: null,
    transform: null,
    transition: null
  });

  const getAnimation = () => {
    if (countOneThirdScroll === 1 && !closed && !submitted) {
      setStyle(style => ({
        ...style,
        animation: css`
          ${keyframeAppear} 0.5s ease-in-out forwards
        `
      }));
    } else if (closed || submitted) {
      setStyle(style => ({
        ...style,
        transform: 'translateY(100%)',
        transition: 'transform 0.5s ease-in-out'
      }));
    } else if (
      countOneThirdScroll > 1 &&
      !style.animation &&
      !closed &&
      !submitted
    ) {
      setStyle(style => ({
        ...style,
        animation: css`
          ${keyframeAppear} 0.5s ease-in-out forwards
        `
      }));
    }
  };

  const handleClose = () => {
    setClosed(true);
    localStorage.setItem('newsletterPanel', 'closed');
    localStorage.setItem('nlPanelClosedAt', new Date().toISOString());
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem('newsletterPanel', 'submitted');
    localStorage.removeItem('nlPanelClosedAt');
  };

  const handleScroll = () => {
    const body = document.querySelector('body');
    const fraction = window.scrollY / body.clientHeight;
    if (Math.abs(fraction - 1 / 3) <= 1e-2) {
      setCountOneThirdScroll(countOneThirdScroll + 1);
    }
  };

  const checkClosedPanelTiming = () => {
    const nlPanelClosedAt = localStorage.getItem('nlPanelClosedAt');
    if (nlPanelClosedAt) {
      const diffTime = Date.now() - Date.parse(nlPanelClosedAt);
      if (diffTime >= 10 * 60 * 1000) {
        setCountOneThirdScroll(0);
        setClosed(false);
        localStorage.removeItem('nlPanelClosedAt');
        localStorage.removeItem('newsletterPanel');
      }
    }
  };

  const checkPanelCondition = () => {
    const nlPanelCondition = localStorage.getItem('newsletterPanel');
    if (nlPanelCondition === 'closed') {
      setClosed(true);
      setSubmitted(false);
    } else if (nlPanelCondition === 'submitted') {
      setClosed(false);
      setSubmitted(true);
    }
    checkClosedPanelTiming();
  };

  useEffect(() => {
    getAnimation();
  }, [countOneThirdScroll, closed, submitted]);

  useEffect(() => {
    checkPanelCondition();
    const interval = setInterval(checkClosedPanelTiming, 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper
      id='newsletter-panel'
      position='fixed'
      bottom='-100%'
      left='0%'
      backgroundColor={colors.blueOpacity}
      alignSelf='flex-start'
      width='100%'
      dWidth='640px'
      animation={style.animation}
      transform={style.transform}
      transition={style.transition}
    >
      <Wrapper
        dPadding='8px 16px 16px 16px'
        padding='8px'
        width='100%'
        boxSizing='border-box'
        zIndex='50'
      >
        <Wrapper direction='row' justify='flex-end' width='100%'>
          <Link
            color='white'
            size='14px'
            weight='bold'
            onClick={handleClose}
            zIndex='100'
          >
            <IconWrapper color='white' className='fas fa-times' zIndex='150' />
          </Link>
        </Wrapper>
        <Wrapper
          width='100%'
          dPadding='8px 30px 8px 20px'
          padding='8px'
          align='flex-start'
          boxSizing='border-box'
        >
          <Font size='25px' weight='bold' color='white' margin='0.25em 0'>
            Get latest updates in web technologies
          </Font>
          <Font color='white' margin='0.25em 0' size='15px'>
            I write articles related to web technologies, such as design trends,
            development tools, UI/UX case studies and reviews, and more. Sign up
            to my newsletter to get them all.
          </Font>
        </Wrapper>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Wrapper
            dDirection='row'
            dJustify='space-between'
            direction='column'
            justify='flex-start'
            width='100%'
            dPadding='8px 30px 8px 20px'
            padding='8px'
            boxSizing='border-box'
          >
            <Input
              placeholder='Email address'
              type='email'
              dWidth='70%'
              width='91%'
              padding='8px'
              margin='8px 0'
              required
            />
            <Button
              width='100%'
              dWidth='25%'
              background={colors.orange}
              padding='8px'
              margin='8px 0'
              zIndex='100'
              type='submit'
            >
              Count me In!
            </Button>
          </Wrapper>
        </form>
      </Wrapper>
    </Wrapper>
  );
};

export default NewsletterPanel;
