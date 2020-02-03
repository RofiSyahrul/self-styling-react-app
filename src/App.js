import React from 'react';
import { colors } from './constants';
import { Wrapper } from './components/basic';
import NotificationPanel from './components/NotificationPanel';
import Header from './components/Header';
import HighlightsPanel from './components/HighlightsPanel';
import Footer from './components/Footer';
import NewsletterPanel from './components/NewsletterPanel';

const App = () => (
  <Wrapper
    id='container'
    width='100%'
    maxWidth='1366px'
    backgroundColor={colors.smokeGrey}
    overflowY='visible'
    overflowX='visible'
    align='flex-start'
  >
    <NotificationPanel />
    <Header />
    <HighlightsPanel />
    <Footer />
    <NewsletterPanel />
  </Wrapper>
);

export default App;
